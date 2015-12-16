/**
 * 消息弹出框msgbox
 * 1. msgbox.alert( txt, fnOK )
 * 2. msgbox.alert( fnOK )
 * 3. msgbox.confirm( txt, fnOK, fnNO )
 * 4. msgbox.confirm( fnOK, fnNO )
 * 5. msgbox.toast( txt )
 *
 * @author jun.yj
 * @date 2015/8/30
 */

define(function(require, exports, module){
	'use strict';

	var $ = require('$'),
		timer = require('util/timer');

	var $d = $('#doc'),
		$mi = $d.find('div.msgbox-info'),
		$mc = $d.find('div.msgbox-confirm'),
		$mt = $d.find('div.msgbox-toast');

	var handleOK = null,
		handleCancel = null;

	var oldAlertContent = null,
		oldConfirmContent = null;

	var init = function(){
		render();
		wait();
	},

	render = function(){

		var $float = $d.find('div.float'),
			$content = $float.children('div.content');

		// float content
		if ( !$float.length ) {

			$d.append( '<div class="float"><div class="content"></div></div>' );

			$float = $d.find('div.float');
			$content = $float.children('div.content');
		}

		// msgbox info
		if ( !$mi.length ) {
			$mi = $(
				'<div class="overlay-top msgbox msgbox-info hide">' +
				  '<div class="content">' +
				    '<div class="main"></div>' +
				    '<div class="action">' +
					  '<a href="javascript:void(0)" class="button ok">确定</a>' +
					'</div>' +
				  '</div>' +
				'</div>'
			).appendTo( $content );
		}

		// msgbox confirm
		if ( !$mc.length ) {
			$mc = $(
				'<div class="overlay-top msgbox msgbox-confirm hide">' +
				  '<div class="content">' +
				    '<div class="main"></div>' +
					'<div class="action clearfix">' +
					  '<div class="left">' +
						'<a href="javascript:void(0)" class="button button-lesser no">取消</a>' +
					  '</div>' +
					  '<div class="right">' +
						'<a href="javascript:void(0)" class="button ok">确定</a>' +
					  '</div>' +
					'</div>' +
				  '</div>' +
				'</div>'
			).appendTo( $content );
		}

		// msgbox toast
		if ( !$mt.length ) {
			$mt = $(
				'<div class="msgbox-toast hide">' +
				  '<div class="content"></div>' +
				'</div>'
			).appendTo( $content );
		}
	},

	wait = function(){

		var fnOk = function( evt ){

			evt.preventDefault();

			var $el = $(this);

			if ( $el.hasClass('button-disabled') ) {
				return;
			}

			if ( $el.attr('href').indexOf('javascript:void(0)') === -1 ) {
				window.location.href = $el.attr('href');
				return;
			}

			hide();

			handleOK && handleOK.call( this );
		},

		fnCancel = function( evt ){

			evt.preventDefault();

			var $el = $(this);

			if ( $(this).hasClass('button-disabled') ) {
				return;
			}

			if ( $el.attr('href').indexOf('javascript:void(0)') === -1 ) {
				window.location.href = $el.attr('href');
				return;
			}

			hide();

			handleCancel && handleCancel.call( this );
		};

		$mi.find('div.action a.ok').on( 'tap', fnOk );

		$mc.find('div.action a.ok').on( 'tap', fnOk );
		$mc.find('div.action a.no').on( 'tap', fnCancel );
	},

	setAlertOpts = function( opts ){

		var $ok = $mi.find('div.action a.ok');

		var name = '确定',
			href = 'javascript:void(0)';

		if ( opts && opts.ok ) {
			name = opts.ok.name || name;
			href = opts.ok.url || href;
		}

		$ok.text( name ).attr( 'href', href );
	},

	setConfirmOpts = function( opts ){

		var $ok = $mc.find('div.action a.ok'),
			$no = $mc.find('div.action a.no');

		var ok_name = '确定',
			ok_href = 'javascript:void(0)',
			no_name = '取消',
			no_href = 'javascript:void(0)';

		if ( opts && opts.ok ) {
			ok_name = opts.ok.name || ok_name;
			ok_href = opts.ok.url || ok_href;
		}

		if ( opts && opts.no ) {
			no_name = opts.no.name || no_name;
			no_href = opts.no.url || no_href;
		}

		$ok.text( ok_name ).attr( 'href', ok_href );
		$no.text( no_name ).attr( 'href', no_href );
	},

	alertContent = function( txt, ok, opts ){

		handleOK = ok;
		handleCancel = null;

		if ( txt ) {
			oldAlertContent = $mi.find('div.main').html();

			$mi.find('div.main').html( txt );
		}

		setAlertOpts( opts );

		$mi.removeClass('hide');
	},

	confirmContent = function( txt, ok, cancel, opts ){

		handleOK = ok;
		handleCancel = cancel;

		if ( txt ) {
			oldConfirmContent = $mc.find('div.main').html();

			$mc.find('div.main').html( txt );
		}

		setConfirmOpts( opts );

		$mc.removeClass('hide');
	},

	tid = 0,

	toastContent = function( txt ){

		if ( txt ) {

			$mt.children('div.content').text( txt );
			$mt.removeClass('hide');

			timer.clear( tid );
			tid = timer.one(function(){
				$mt.animate({opacity: 0}, 500, function(){
					$mt.addClass('hide').css({opacity: 1});
				});
			}, 2500).id;
		}
	},

	hide = function(){
		$mi.addClass('hide');
		$mc.addClass('hide');
		$mt.addClass('hide');

		if ( oldAlertContent ) {
			$mi.find('div.main').html( oldAlertContent );
		}
		if ( oldConfirmContent ) {
			$mc.find('div.main').html( oldConfirmContent );
		}
	};

	init();

	return {
		alert: function( txt, ok, opts ){
			if ( typeof txt === 'function' ) {
				opts = ok;
				ok = txt;
				txt = null;
			}
			alertContent( txt, ok, opts );
			return this;
		},

		confirm: function( txt, ok, cancel, opts ){
			if ( typeof txt === 'function' ) {
				opts = cancel;
				cancel = ok;
				ok = txt;
				txt = null;
			}
			confirmContent( txt, ok, cancel, opts );
			return this;
		},

		toast: function( txt ){
			toastContent( txt );
		},

		disable: function(){
			$mi.find('div.action > a.button').addClass('button-disabled');
			$mc.find('div.action > a.button').addClass('button-disabled');
			return this;
		},

		enable: function(){
			$mi.find('div.action > a.button').removeClass('button-disabled');
			$mc.find('div.action > a.button').removeClass('button-disabled');
			return this;
		}
	};
});
