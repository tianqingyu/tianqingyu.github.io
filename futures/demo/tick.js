/**
 * 股票即时走势图.
 *
 * @author jun.yj
 * @since 15/8/21
 */

//define(function (require, exports, module) {
(function(){
    'use strict';

    var log = function(){
        console.log.apply(console, arguments);
    },

    // common helper
    isString = function( s ){
        return typeof s === 'string';
    },
    isObject = function( o ){
        return o && !isArray(o) && typeof o === 'object';
    },
    isArray = function( a ){
        return a && a instanceof Array;
    },
    forEach = function( source, callback ){
        if ( source.forEach ) {
            source.forEach( callback );
        }
        else {
            for (var n in source) {
                if ( source.hasOwnProperty(n) ) {
                    callback( source[n], n, source );
                }
            }
        }
    },

    // svg dom helper
    create = function( tagName ){
        return document.createElementNS(
            'http://www.w3.org/2000/svg', tagName
        );
    },
    append = function( p, c ){
        p.appendChild( c );
    },
    insert = function( p, c, r ){
        p.insertBefore( c, r );
    },
    remove = function( el ){
        el.parentNode.removeChild( el );
    },
    getBy = function( selector ){
        return document.querySelector( selector );
    },
    attr = function( el, name, value ){
        // get value
        if ( isString(name) && value == null ) {
            return el.getAttribute( name );
        }

        // set value
        if ( isString(name) ) {
            if ( name === 'style' && isObject(value) ) {
                var vals = '';
                forEach(value, function( v, n ){
                    vals += n + ':' + v + ';';
                });
                value = vals;
            }
            el.setAttribute( name, value );
        }
        // name = object
        else {
            forEach(name, function( v, n ){
                attr( el, n, v );
            });
        }
    },
    textContent = function( el, txt ){
        if ( txt == null ) {
            return el.firstChild.nodeValue;
        }

        var tspan = create('tspan');
        append( tspan, document.createTextNode(txt) );

        append( el, tspan );
    };

    var COLOR_B = 'red', // 参考线颜色
        COLOR_D = '#e8e8e8', // 深色
        COLOR_S = '#f8f8f8', // 浅色
        COLOR_P = '#2f84cc', // 路径颜色
        COLOR_V = '#e0e0e0', // 成交量颜色
        COLOR_T = '#888'; // 字体颜色

    /**
     * 分时图
     *
     * opts = {svg, data, period, closingPriceYe, isNeedShowDecimal}
     */
    var Sline = function( opts ){

        // svg标签
        this.svg = opts.svg;

        // 从开盘到当前时间的所有股票数据（每分钟的价格、成交量等）
        this.data = opts.data || [{
            volume: 0,
            current: 0,
            time: '9:30'
        }];

        // 可交易的时间段（比如9:30~11:30 13:00~15:00）
        this.period = opts.period || [
            ['9:30', '11:30'],
            ['13:00', '15:00']
        ];

        // 昨天收盘价
        this.closingPriceYe = opts.closingPriceYe || 0;

        // 是否显示小数
        this.isNeedShowDecimal = opts.isNeedShowDecimal || false;

        // 初始化其他数据
        this.init();
    };

    Sline.prototype = {

        init: function(){

            // svg的宽
            this.svgWidth = this.svg.width.baseVal.value;

            // svg的高
            this.svgHeight = this.svg.height.baseVal.value;

            // 交易时间段转换成分钟数
            this.minutes = this._period2mins();

            // 从股票数据，取出当前股价
            this.prices = this._resolveData().prices;

            // 从股票数据，取出当前成交量
            this.volumes = this._resolveData().volumes;

            // 最高价、最低价
            var arr = this.prices.slice().sort();
            this.minPrice = arr[0];
            this.maxPrice = arr[arr.length - 1];

            // 最高、最低成交量
            arr = this.volumes.slice().sort();
            this.minVolume = arr[0];
            this.maxVolume = arr[arr.length - 1];

            // 股价图和成交量图之间的距离
            var space = 20;

            // 股价绘制区
            this.priceChartBox = {
                x: {
                    begin: 0,
                    end: this.svgWidth,
                    width: this.svgWidth
                },
                y: {
                    begin: 0,
                    end: this.svgHeight * 0.617,
                    height: this.svgHeight * 0.617
                }
            };

            // 成交量绘制区
            this.volumeChartBox = {
                x: {
                    begin: 0,
                    end: this.svgWidth,
                    width: this.svgWidth
                },
                y: {
                    begin: this.priceChartBox.y.end + space,
                    end: this.svgHeight,
                    height: this.svgHeight - this.priceChartBox.y.height - space
                }
            };

            var p = this.closingPriceYe * 0.01;

            // 价格区间的长度
            this.priceRangeLength = p < 1 ? 0.5 : p < 100 ? 50 : 250;

            // 起始价格
            this.beginPrice = 0;
            this.endPrice = 0;
        },

        _c2x: function( i ){
            return (this.priceChartBox.x.width / this.minutes * i).toFixed(1);
        },

        _c2y: function( p ){
            return ((this.beginPrice - p) / (this.beginPrice - this.endPrice) * this.priceChartBox.y.height).toFixed(1);
        },

        _c2line: function( i, p ){
            return 'L' + this._c2x(i) + ',' + this._c2y(p);
        },

        _c2start: function( i, p ){
            return 'M' + i + ',' + this._c2y(p);
        },

        _c2close: function( i ){
            return 'L' + this._c2x(i) + ',' + this.priceChartBox.y.end +
                   'L' + this.priceChartBox.x.begin +',' + this.priceChartBox.y.end + 'Z';
        },

        // 绘制图形
        // timeData = {current, volume, time}
        draw: function( timeData ){

            alert( this.svg.childNodes[1] );

            var gPricesEl = this.svg.children[1],
                gVolumesEl = this.svg.children[2];

            if ( !this._init ) {
                this._init = true;

                this._drawFramework( gPricesEl, gVolumesEl );
            }

            if ( timeData && timeData.current > 0 ) {
                if ( this.data[0].current === 0 ) {
                    this.data.splice(0, 1);
                }

                this.data.push( timeData );
                this.prices.push( timeData.current );
                this.volumes.push( timeData.volume );

                this.minPrice = Math.min( this.minPrice, timeData.current );
                this.maxPrice = Math.max( this.maxPrice, timeData.current );

                this.minVolume = Math.min( this.minVolume, timeData.volume );
                this.maxVolume = Math.max( this.maxVolume, timeData.volume );
            }

            if ( this.prices[0] > 0 || this.volumes[0] > 0 ) {
                this._drawChart( gPricesEl, gVolumesEl );
            }
        },

        // 基本框架
        _drawFramework: function( gPricesEl, gVolumesEl ){

            // 时间线
            this._drawLine(
                gPricesEl,
                this.priceChartBox.x.begin,
                this.priceChartBox.y.end,
                this.priceChartBox.x.end,
                this.priceChartBox.y.end,
                COLOR_D
            );
            this._drawPeriodLine( gPricesEl );

            // 成交量线
            this._drawLine(
                gVolumesEl,
                this.volumeChartBox.x.begin,
                this.volumeChartBox.y.begin,
                this.volumeChartBox.x.end,
                this.volumeChartBox.y.begin,
                COLOR_D
            );
            this._drawLine(
                gVolumesEl,
                this.volumeChartBox.x.begin,
                this.volumeChartBox.y.begin + this.volumeChartBox.y.height / 2,
                this.volumeChartBox.x.end,
                this.volumeChartBox.y.begin + this.volumeChartBox.y.height / 2,
                COLOR_S
            );
            this._drawLine(
                gVolumesEl,
                this.volumeChartBox.x.begin,
                this.volumeChartBox.y.end - 0.5,
                this.volumeChartBox.x.end,
                this.volumeChartBox.y.end - 0.5,
                COLOR_S
            );

            // 没有数据的情况，绘制默认的参考线
            if ( this.data.length === 1 && this.data[0].current === 0 ) {
                if ( this.closingPriceYe !== 0) {
                    this._drawBasePriceLine( gPricesEl );
                }
            }
        },

        // 时间段对应的时刻和分段线
        _drawPeriodLine: function( gPricesEl ){

            var self = this,
                len = this.period.length,
                last = len - 1,
                x = 0;

            forEach(this.period, function( arr, i ){

                var stime = arr[0],
                    etime = arr[1],
                    mins = arr[2];

                self._drawText(
                    gPricesEl,
                    i === 0 ? x + 1 : x - 15,
                    self.priceChartBox.y.end + 12,
                    stime
                );

                if ( i === last ) {
                    x = self.priceChartBox.x.width - 31;

                    self._drawText(
                        gPricesEl,
                        x,
                        self.priceChartBox.y.end + 12,
                        etime
                    );
                }
                else {
                    x += mins / self.minutes * self.priceChartBox.x.width;

                    self._drawLine(
                        gPricesEl,
                        self.priceChartBox.x.begin + x,
                        self.priceChartBox.y.begin,
                        self.priceChartBox.x.begin + x,
                        self.priceChartBox.y.end
                    );
                }
            });
        },

        _drawChart: function( gPricesEl, gVolumesEl ){

            this._drawPriceLine( gPricesEl );

            this._drawPath( gPricesEl );
            this._drawBar( gVolumesEl );
        },

        _drawBasePriceLine: function( gPricesEl ){

            // base
            this._drawLine(
                gPricesEl,
                this.priceChartBox.x.begin,
                this.priceChartBox.y.begin + this.priceChartBox.y.height / 2,
                this.priceChartBox.x.end,
                this.priceChartBox.y.begin + this.priceChartBox.y.height / 2,
                COLOR_B,
                '3,3'
            );

            // 上 - 2/10
            this._drawLine(
                gPricesEl,
                this.priceChartBox.x.begin,
                this.priceChartBox.y.begin + this.priceChartBox.y.height * 0.2,
                this.priceChartBox.x.end,
                this.priceChartBox.y.begin + this.priceChartBox.y.height * 0.2
            );

            // 下 - 8/10
            this._drawLine(
                gPricesEl,
                this.priceChartBox.x.begin,
                this.priceChartBox.y.begin + this.priceChartBox.y.height * 0.8,
                this.priceChartBox.x.end,
                this.priceChartBox.y.begin + this.priceChartBox.y.height * 0.8
            );
        },

        _drawPriceLine: function( gPricesEl ){

            if ( this._lines ) {
                forEach(this._lines, function( el ){
                    el && remove( el );
                });
            }

            var self = this;

            var lines = this._lines = [];

            var min = this.minPrice,
                max = this.maxPrice,
                close = this.closingPriceYe,
                step = this.priceRangeLength;

            if ( min === max && close === max ) {
                lines.push(this._drawLine(
                    gPricesEl,
                    this.priceChartBox.x.begin,
                    this.priceChartBox.y.begin + this.priceChartBox.y.height / 2,
                    this.priceChartBox.x.end,
                    this.priceChartBox.y.begin + this.priceChartBox.y.height / 2,
                    COLOR_B,
                    '3,3'
                ));
            }
            else {
                var range = [close];

                if ( close > max ) {

                    var p = close;

                    range.unshift( p + step );
                    while ( p >= min ) {
                        p -= step;
                        range.push( p );
                    }
                    range.push( p - step );

                    var len = range.length - 1;

                    var pathEl = getBy('#sline_path_bg');

                    forEach(range, function( p, i ){

                        if ( i === 0 || i === len ) {
                            return;
                        }

                        var x1, y1, x2, y2, color, dash;

                        if ( p === close ) {
                            color = COLOR_B;
                            dash = '3,3';
                        }

                        x1 = self.priceChartBox.x.begin;
                        y1 = self.priceChartBox.y.height / len * i;
                        x2 = self.priceChartBox.x.end;
                        y2 = y1;

                        lines.push(self._drawLine( gPricesEl, x1, y1, x2, y2, color, dash, pathEl ));
                    });

                    this.beginPrice = range[0];
                    this.endPrice = range[len];
                }
                else if ( close < min ) {


                }
            }
        },

        _drawPath: function( gPricesEl ){

            var elem = getBy('#sline_path'),
                bg = getBy('#sline_path_bg');

            if ( !elem ) {
                elem = create('path');
                bg = create('path');

                attr(elem, {
                    id: 'sline_path',
                    stroke: COLOR_P,
                    fill: 'none'
                });
                attr(bg, {
                    id: 'sline_path_bg',
                    stroke: 'none',
                    fill: COLOR_P,
                    'fill-opacity': '0.2'
                });

                append( gPricesEl, bg );
                append( gPricesEl, elem );
            }

            var self = this,
                d = '', dz, ci;

            forEach(this.prices, function( p, i ){

                ci = i;

                if ( i === 0 ) {
                    d += self._c2start( i, p );
                }

                d += self._c2line( i, p );
            });

            dz = d + this._c2close( ci );

            attr( elem, 'd', d );
            attr( bg, 'd', dz );
        },

        _drawBar: function( gVolumesEl ){

        },

        _drawLine: function( g, x1, y1, x2, y2, color, dash, refEl ){

            var elem = create('line');

            attr( elem, {
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                stroke: color || COLOR_S
            });

            if ( dash ) {
                attr( elem, 'stroke-dasharray', dash );
            }

            refEl ? insert( g, elem, refEl ) : append( g, elem );

            return elem;
        },

        _drawText: function( g, x, y, txt, color ){

            var elem = create('text');

            attr( elem, {
                x: x,
                y: y,
                fill: color || COLOR_T
            });

            textContent( elem, txt );

            append( g, elem );

            return elem;
        },

        // 交易时间段转换为分钟数（x轴按分钟数来均分）
        _period2mins: function(){

            var period = this.period,

            minutes = 0,

            t2m = function( time ){
                var a = time.split(':'),
                    h = a[0] - 0,
                    m = a[1] - 0;
                return h * 60 + m;
            };

            forEach( period, function( v ){

                var stime = v[0],
                    etime = v[1];

                v[2] = t2m(etime) - t2m(stime);

                if ( v[2] < 0 ) {
                    v[2] = v[2] + 24*60;
                }

                minutes += v[2];
            });

            return minutes;
        },

        // 分解data
        _resolveData: function(){

            var data = this.data,

            ret = {
                prices: new Array( data.length ),
                volumes: new Array( data.length )
            },

            fast = function(){
                return ret;
            };

            forEach(data, function( o, i ){
                ret.prices[i] = o.current;
                ret.volumes[i] = o.volume;
            });

            this._resolveData = fast;

            return ret;
        }
    };


    /**
     * TODO demo
     */
    setTimeout(loaded, 16);

    function loaded() {

        var tick = new Sline({
            svg: document.querySelector('#tickSline'),
            data: DATA2.chartlist.slice(0,100),
            closingPriceYe: closingPriceYe,
            period: [
                ['9:30', '11:30'],
                ['13:00', '15:00']
            ]
        });

        tick.draw();

        var data = DATA2.chartlist.slice(100);

        var pool = function(){

            if ( data.length ) {
                tick.draw( data.shift() );

                setTimeout( pool, 1000 );
            }
        };

        setTimeout(pool, 1000);
    }
})();






















