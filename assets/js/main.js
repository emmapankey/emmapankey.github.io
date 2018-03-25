$(document).ready(function () {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100 });

    /* ======= Scroll To Element ======= */
    $("#scrollTo").click(function () {

        var target = this.hash;

        $("html, body").animate({
            scrollTop: target.offset().top - 200
        }, 4000);
        
    });

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function () {

        $('#page-nav-wrapper').removeClass('fixed');

        var scrollTop = $(this).scrollTop();
        var topDistance = $('#page-nav-wrapper').offset().top;

        if ((topDistance) > scrollTop) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
        }
        else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
        }

    });

    /* ======= Chart ========= */
    $('.chart').easyPieChart({
        barColor: '#44A1A0',//Pie chart colour
        trackColor: '#e8e8e8',
        scaleColor: false,
        lineWidth: 5,
        animate: 2000,
        onStep: function (from, to, percent) {
            $(this.el).find('span').text(Math.round(percent));
        }
    });

});