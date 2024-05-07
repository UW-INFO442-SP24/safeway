$(document).ready(function() {
    $(window).scroll(function() {
        $('.animate__animated').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (position < scrollPosition + windowHeight - 100) {
                $(this).addClass('animate__fadeInUp');
            }
        });
    });
});
