// jQuery
$(document).ready(function(){
    $(window).scroll(function(e){
        if($(window).scrollTop()>0 ) {
            $(".navbar").removeClass("nav_top");
        } else {
            $(".navbar").addClass("nav_top");
        }
    });
});