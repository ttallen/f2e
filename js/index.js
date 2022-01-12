$(document).ready(function(){
    function compute(){
        let top = $(window).scrollTop() + $(window).height() / 10;
        let left = $(window).scrollLeft();
        let lightbox = $('.page-open');
        lightbox.css({
            top: top + 'px',
            left: left + 'px'
        });
    }
    $("body").on('click','.btnOpen1',function(e){
        e.preventDefault();
        $("#card-page1").addClass("page-open");
        $(".bg-black").addClass("active");
        compute();
    });
    $("body").on('click','.btnOpen2',function(e){
        e.preventDefault();
        $("#card-page2").addClass("page-open");
        $(".bg-black").addClass("active");
        compute();
    });
    $("body").on('click','.btnOpen3',function(e){
        e.preventDefault();
        $("#card-page3").addClass("page-open");
        $(".bg-black").addClass("active");
        compute();
    });
    $("body").on('click','.btnOpen4',function(e){
        e.preventDefault();
        $("#card-page4").addClass("page-open");
        $(".bg-black").addClass("active");
        compute();
    });
    $("body").on('click','.close-card',function(){
        $(this).parent().parent(".card-page").removeClass("page-open");
        $(".bg-black").removeClass("active");
    });
    $("body").on('click','.bg-black',function(){
        $(".card-page").removeClass("page-open");
        $(".bg-black").removeClass("active");
    });
});