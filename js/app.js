/**
 * Created by duguangwei on 15/11/24.
 */

$(function () {
    var $panels, n, r;
    $panels = $('.panel');
    r = /\bpanel-\d+\b/;
    n = 5;
    $panels.on('touchend', function (e) {
        var idx;
        idx = $(this).index();
        return $panels.toggleClass(function (i, c) {
            var m;
            m = c.match(r)[0];
            return m + ' panel-' + (n + i - idx) % n;
        });
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    var $page = $('.page'),
        $getEggFix = $('#get-egg');
    $('.panel-0').on('touchend', function () {
        $getEggFix.show();
        $page.addClass('fix');
    })

});