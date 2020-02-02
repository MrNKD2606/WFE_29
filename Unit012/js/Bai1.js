$(window).resize(function(){
    var width = $(window).width();
    console.log(width);
    if (width <= 768){
        $('header').css({'width' : '100%'});
        $('ul').css({'float' : 'left'});
        $('.menu_lv1').css({'width' : '100%'});
        $('.menu_lv1').children('ul').css({'position' : 'relative','top' :'20px' ,'background' : '#3b8d36',});
    	$('.menu_lv2').css({'border' : 'none',});
    } else{
        $('header').css({'width' : '80%'});
        $('ul').css({'float' : 'right'});
        $('.menu_lv1').css({'width' : 'auto'});
        $('.menu_lv1').children('ul').css({'position' : 'absolute','top' :'63px' ,'background' : '#92ca5c',});
    	$('.menu_lv2').css({'border' : '1px solid white',});
    }
});