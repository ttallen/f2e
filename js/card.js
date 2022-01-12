$(document).ready(function(){
    $("body").on('click','.btnOpen',function(e){
        e.preventDefault();
        $(this).parent().parent().parent().next(".card-page").addClass("page-open");
        $(".bg-black").addClass("active");
        let top = $(window).scrollTop() + $(window).height() / 10;
        let left = $(window).scrollLeft();
        let lightbox = $('.page-open');
        lightbox.css({
            top: top + 'px',
            left: left + 'px'
        });
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