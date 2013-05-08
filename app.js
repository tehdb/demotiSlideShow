$(function(){

	var $img = $('#img'),
		$cap = $('#cap'),
		$ble = $('#blender'),
		curidx = 0,
		source = null,
		dh = $(window).height(),
		dw = $(window).width();

	$.getJSON('content.json', function(data) {
		source = data;
		showNext();
	});

	function showNext(){
		$ble.fadeOut('slow',function(){
			$cap.find('div').html( source[curidx].txt );
			var img = new Image();
			img.onload = function(){
				var $i = $(img);

				$i.hide();
				$img.html( $i );
				$ble.fadeIn('slow', function(){
					$i.css({
						'max-height' : dh - $cap.outerHeight() - 70,
						'max-width' : dw - 30
					}).fadeIn('slow');

					window.setTimeout(function(){
						curidx++;
						if( curidx < source.length) {
							showNext();
						} else {
							$img.fadeOut('slow');
							$cap.fadeOut('slow',function(){
								$cap.find('div').html( 'Конец' );
								$cap.fadeIn('slow');
							});
						}
					}, 11000);
				});
			};
			img.src = 'img/' + source[curidx].img;

		});
	}
});