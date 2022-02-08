$(document).ready(function(){
    $('#goTop').click(function () {
        $('html,body').animate({scrollTop: 0,},1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').stop().fadeOut();
        }
    });
});
