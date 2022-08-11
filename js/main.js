$(function () {
    //     $('.siteSlider>ul>li').removeClass("on");
    //     $('.siteSlider>ul>li').eq(pubslide).addClass("on");
    //     $(".R_pub>ul>li").removeClass("on");
    //     $(".R_pub>ul>li").eq(pubslide).addClass("on");

    //     $('.web_tab ul li').removeClass("on");
    //     $('.web_tab ul li').eq(pubslide).addClass("on");
    // });

    // $('.siteSlider>ul').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: true,
    //     autoplay: false,
    //     pauseOnHover: false,
    // });

    // $('.pubsite>ul').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: true,
    //     autoplay: false,
    //     pauseOnHover: false,
    // });

    //퍼블리싱 탭메뉴 함수
    $('.web_tab ul li').on('click', function () {
        $(this).css({
            color: '#752ea1'
        }).siblings().css({
            color: '#000'
        })
        let i = $(this).index();
        $('.siteSlider>ul>li').eq(i).show().siblings().hide();
        $('.Rweb_site ul li').eq(i).show().siblings().hide();
    });

    $('.pub_tab ul li').on('click', function () {
        $(this).css({
            color: '#752ea1'
        }).siblings().css({
            color: '#000'
        })
        let i = $(this).index();
        $('.pubsite>ul>li').eq(i).show().siblings().hide();
        $('.Rpub_site>ul>li').eq(i).show().siblings().hide();
    });

    var $skillVar = $('.skill>ul>li>p>span:nth-child(2)');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $skillVar.addClass('skill_bar');
        } else {
            $skillVar.removeClass('skill_bar');
        }
    });


    $(".pub_tab>ul>li").click(function () {
        var pubLi = $(this).index();
        pubtab(pubLi);
        pubnum = pubLi;
        pubslider(pubnum);
        // $(".pub_tab>ul>li").removeClass("on");
        // $(this).addClass("on");

    });

























































})//opening