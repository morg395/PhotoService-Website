$(function () {
    
    var header = $(".header");
    var scrollChange = 110;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollChange) {
            header.addClass('header-scrolling');
        } else {
            header.removeClass('header-scrolling');
        }
    });
})