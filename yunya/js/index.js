/**
 * @author jun.yj
 * @since 2015/6/5
 */

jQuery(function( $ ){
	
	var P = $('#content');
	
	// Í¼Æ¬ÂÖ²¥×é¼þ
	// ======================================================
	var $gallery = P.find('div.mod-gallery'),
		$lis = $gallery.find('li');
	
	var width = $lis.eq(0).width(),
		length = $lis.length - 1;
	
	var dots = '';
	$lis.each(function( i ) {
		if ( i === 0) {
			dots += '<span class="curr">0</span>';
		}
		else {
			dots += '<span>0</span>';
		}
	});
	$gallery.find('div.dots').append( dots );
	
	var $dots = $gallery.find('div.dots span');
	
	$gallery.data( 'index', 0 );
	
	$gallery.find('div.prev').on('click', function(){
		
		var index = $gallery.data('index');
		
		if ( index > 0 ) {
			
			$gallery.data( 'index', index - 1 );
			
			var $curr = $lis.eq( index ),
				$prev = $lis.eq( index - 1 );
			
			$prev.css({
				left: -width
			});
			
			$curr.animate({ left: width });
			$prev.animate({ left: 0 });
			
			$dots.eq( index - 1 ).addClass('curr').next().removeClass('curr');
		}
	});
	
	$gallery.find('div.next').on('click', function(){
		
		var index = $gallery.data('index');
		
		if ( index < length ) {
			
			$gallery.data( 'index', index + 1 );
			
			var $curr = $lis.eq( index ),
				$next = $lis.eq( index + 1 );
			
			$next.css({
				left: width,
				display: 'block'
			});
			
			$curr.animate({ left: -width });
			$next.animate({ left: 0 });
			
			$dots.eq( index + 1 ).addClass('curr').prev().removeClass('curr');
			
			loadImage( $next );
		}
	});
	
	// Í¼Æ¬ÑÓ³Ù¼ÓÔØ
	// ======================================================
	P.find('img[data-original]').lazyload();
	
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
