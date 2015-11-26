/**
 * Created by duguangwei on 15/11/24.
 */

$(function () {
    var doing = false;
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
    $panels.on('webkitTransitionEnd', function () {
        doing = false;
    });
    var $page = $('.page'),
        $getEggFix = $('#get-egg');
    $('.touch-label').on('touchend', function () {
        if (!doing) {
            $getEggFix.show();
            $page.addClass('fix');
        }
    });
    $('#get-egg .peizhi').on('touchend', function () {
        location.href = 'chose-product.html';
    });


    var mySwiper = new Swiper ('#product-swiper', {
        loop: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    mySwiper.on('click', function(swiper){
        $('#peizhi').show();
        $page.addClass('fix');
    });
    $('#peizhi').on('touchend', function () {
        location.href = '我的宝贝-电量低.html';
    })


    var spritePic = document.getElementById('sprite') != null && new mo.Film(document.getElementById('sprite'),{
        resource : '../img/egg-animate.png',
        totalFrame : 6,
        spriteDirect: 1
    });

    document.getElementById('sprite') != null && spritePic.play(100);


});
