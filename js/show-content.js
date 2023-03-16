$(function () {
    
    $('.works-more').click(function() {
        $('.works-content-row3').toggleClass('d-flex');
    })
    
    $('.works-more').click(function() {
        $('.works-more__img').toggleClass('rotate')
    })
    
    $('.works-more').on('click', function() {
        $('.works__button--change').html() == 'More' ? $('.works__button--change').html('Less') : $('.works__button--change').html('More')
    })
    
})(jQuery);