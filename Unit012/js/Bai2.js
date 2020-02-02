$(document).ready(function() {
	$('.anh_N').eq(0).on('click', function () {
		$('#lightBox').css({'display' : 'block'});
		var value = $('.anh_N').eq(0).attr('src');
		$('#anh').attr('src',value);

		var value1 = $('.anh_N').eq(0).attr('alt');
		$('#chuThich').text(value1);
	})

	$('.anh_N').eq(1).on('click', function () {
		$('#lightBox').css({'display' : 'block'});
		var value = $('.anh_N').eq(1).attr('src');
		$('#anh').attr('src',value);

		var value1 = $('.anh_N').eq(1).attr('alt');
		$('#chuThich').text(value1);
	})
	$('.anh_N').eq(2).on('click', function () {
		$('#lightBox').css({'display' : 'block'});
		var value = $('.anh_N').eq(2).attr('src');
		$('#anh').attr('src',value);

		var value1 = $('.anh_N').eq(2).attr('alt');
		$('#chuThich').text(value1);
	})
	$('.anh_N').eq(3).on('click', function () {
		$('#lightBox').css({'display' : 'block'});
		var value = $('.anh_N').eq(3).attr('src');
		$('#anh').attr('src',value);

		var value1 = $('.anh_N').eq(3).attr('alt');
		$('#chuThich').text(value1);
	})
	$('.anh_N').eq(4).on('click', function () {
		$('#lightBox').css({'display' : 'block'});
		var value = $('.anh_N').eq(4).attr('src');
		$('#anh').attr('src',value);

		var value1 = $('.anh_N').eq(4).attr('alt');
		$('#chuThich').text(value1);
	})

	$('#close').on('click', function () {
		$('#lightBox').css({'display' : 'none'});
	})
	
});