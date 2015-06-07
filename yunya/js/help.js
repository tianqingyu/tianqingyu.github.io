/**
 * @author jun.yj
 * @since 2015/6/5
 */

jQuery(function( $ ){
	
	var P = $('#content');
	
	// tab«–ªª
	// ======================================================
	P.find('a.tab-ipad,a.tab-pc').on('click', function(){
		
		P[0].className = 'curr-' + this.className;
	});
	
	// ’€µ˛/’πø™
	// ======================================================
	P.find('div.mod-help').on('click', 'h3', function(){
		
		var $el = $(this),
			$div = $el.next(),
			$small = $el.find('small');
		
		if ( $small.hasClass('down') ) {
			$small.removeClass('down').addClass('up');
			$div.hide();
		}
		else {
			$small.removeClass('up').addClass('down');
			$div.show();
			
			loadImage( $div );
		}
	});
	
	//  ‰»ÎøÚ…Ï’π
	// ======================================================
	P.find('div.mod-search input.input').on({
		'focus': function(){
			$(this).animate({ width: '+=100' }, 'fast');
		},
		'blur': function(){
			$(this).animate({ width: '-=100' }, 'fast');
		}
	});
	
	function loadImage( $el ) {
		
		if ( $el.data('imageLoaded') === true ) {
			return;
		}
		$el.data('imageLoaded', true);
		
		$el.find('img[data-src]').each(function(){
			
			var $img = $(this);
			
			$img.attr( 'src', $img.data('src') );
		});
	}
});
