/**
 * Created by duguangwei on 15/11/24.
 */

$(function () {
    var CONFIG = {
        eggText: {
            '0': {
                name: '艾艾',
                text1: '孵化前属性：神经质，胆小怕事',
                text2: '孵化后属性：聪明，灵活',
                text3: '不同的宠物蛋供选择，成功孵化出蛋的可以获得奖励！'
            },
            '1': {
                name: '艾艾',
                text1: '',
                text2: '',
                text3: ''
            },
            '2': {
                name: '艾艾',
                text1: '',
                text2: '',
                text3: ''
            },
            '3': {
                name: '艾艾',
                text1: '',
                text2: '',
                text3: ''
            },
            '4': {
                name: '艾艾',
                text1: '',
                text2: '',
                text3: ''
            }
        }
    };
    var $panels, n, r;
    $panels = $('.panel');
    var $page = $('.page'),
        $getEggFix = $('#get-egg');
    $panels.on('touchend', function (e) {
        var $current = $(e.currentTarget);
        if ($current.hasClass('panel-0')) {
            $getEggFix.find('.egg').attr('src', $current.find('img').attr('src'));
            $getEggFix.show();
            $page.addClass('fix');
        }
    });
    $('.fix-label').on('touchend', function (e) {
        e.stopPropagation();
        $page.removeClass('fix');
        $(this).hide();
    });

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
    $panels.on('webkitTransitionEnd', function (e) {
        var $current = $(e.currentTarget);
        if ($current.hasClass('panel-0')) {
            changeEggText($current.data('id'));
        }
    });
    // 蛋蛋文字初始化
    changeEggText($('.panel-0').data('id'));
    function changeEggText (id) {
        var textObj = CONFIG.eggText[id];
        for(var key in textObj) {
            $('#egg-' + key).html(textObj[key]);
        }
    }

    $('#get-egg .peizhi').on('touchend', function (e) {
        e.stopPropagation();
        location.href = 'chose-product.html';
    });

    if ($('#product-swiper').length !== 0) {
        var mySwiper = new Swiper ('#product-swiper', {
            loop: true,
            lazyLoading : true,
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            onSlideChangeEnd: function(swiper){
                var current = $('#product_'+(swiper.activeIndex - 1));
                var html = $('#product-text-' + current.data('id')).html();
                $('#product-text-con').html(html);
            },
            onTap: function(swiper){
                var current = $('#product_'+(swiper.activeIndex - 1));
                console.log('当前选择商品：'+current.data('id'));
                $('#peizhi').find('.product').attr('src', current.find('img').attr('src'));
                $('#peizhi').show();
                $page.addClass('fix');
            }
        });
    }

    $('#get-product').on('touchend', function (e) {
        e.stopPropagation();
        location.href = '我的宝贝-电量高.html';
    });
    $('[data-href]').on('touchend', function (e) {
        location.href = e.currentTarget.dataset.href;
    })


    var spritePic = document.getElementById('sprite') != null && new mo.Film(document.getElementById('sprite'),{
        resource : '../img/egg-animate03.png',
        totalFrame : 6,
        spriteDirect: 1
    });

    document.getElementById('sprite') != null && spritePic.play(100);

    //摇一摇
    var myShakeEvent = new Shake({
        threshold: 5
    });

    myShakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);
    var $before = $('.before'),
        $after = $('.after'),
        doing = false;
    function shakeEventDidOccur () {
        $before.hide();
        $after.show();
        console.log('正在摇动');
        location.href = 'after-0' + (Math.floor((Math.random() * 10) % 6) + 1) + '.html';
        if (doing) return;
        setTimeout(function () {
            $before.show();
            $after.hide();
            doing = false;
        }, 800);
        doing = true;
    }

});
