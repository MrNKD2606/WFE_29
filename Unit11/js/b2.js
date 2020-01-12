$(document).ready(function () {
	$('.tieuDe').eq(0).on('click', function (){
        $(".tru").eq(0).toggleClass("a");
        $(".tru").eq(1).removeClass("a");
        $(".tru").eq(2).removeClass("a");
        $(".tru").eq(3).removeClass("a");

        $('.ten').eq(0).toggleClass("b");
        $(".ten").eq(1).removeClass("b");
        $(".ten").eq(2).removeClass("b");
        $(".ten").eq(3).removeClass("b");

        $('.content').eq(0).toggleClass("c");
        $(".content").eq(1).removeClass("c");
        $(".content").eq(2).removeClass("c");
        $(".content").eq(3).removeClass("c");
    });

    $('.tieuDe').eq(1).on('click', function (){
        $(".tru").eq(1).toggleClass("a");
        $(".tru").eq(0).removeClass("a");
        $(".tru").eq(2).removeClass("a");
        $(".tru").eq(3).removeClass("a");

        $('.ten').eq(1).toggleClass("b");
        $(".ten").eq(0).removeClass("b");
        $(".ten").eq(2).removeClass("b");
        $(".ten").eq(3).removeClass("b");

        $('.content').eq(1).toggleClass("c");
        $(".content").eq(0).removeClass("c");
        $(".content").eq(2).removeClass("c");
        $(".content").eq(3).removeClass("c");
    });

    $('.tieuDe').eq(2).on('click', function (){
        $(".tru").eq(2).toggleClass("a");
        $(".tru").eq(0).removeClass("a");
        $(".tru").eq(1).removeClass("a");
        $(".tru").eq(3).removeClass("a");

        $('.ten').eq(2).toggleClass("b");
        $(".ten").eq(0).removeClass("b");
        $(".ten").eq(1).removeClass("b");
        $(".ten").eq(3).removeClass("b");

        $('.content').eq(2).toggleClass("c");
        $(".content").eq(0).removeClass("c");
        $(".content").eq(1).removeClass("c");
        $(".content").eq(3).removeClass("c");
    });

    $('.tieuDe').eq(3).on('click', function (){
        $(".tru").eq(3).toggleClass("a");
        $(".tru").eq(0).removeClass("a");
        $(".tru").eq(1).removeClass("a");
        $(".tru").eq(2).removeClass("a");

        $('.ten').eq(3).toggleClass("b");
        $(".ten").eq(0).removeClass("b");
        $(".ten").eq(1).removeClass("b");
        $(".ten").eq(2).removeClass("b");

        $('.content').eq(3).toggleClass("c");
        $(".content").eq(0).removeClass("c");
        $(".content").eq(1).removeClass("c");
        $(".content").eq(2).removeClass("c");
    });
});