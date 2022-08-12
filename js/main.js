$(function () {
    var $skillVar = $('.skill>ul>li>p>span:nth-child(2)');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $skillVar.addClass('skill_bar');
        } else {
            $skillVar.removeClass('skill_bar');
        }
    });



    //퍼블리싱
    var pubnum = 0;
    $(".pub_controler>.prev").click(function () {
        pubnum--;
        if (pubnum < 0) {
            pubnum = 1;
        }
        siteSlider(pubnum);
        webtab(pubnum);
    });

    $(".pub_controler>.next").click(function () {
        pubnum++;
        if (pubnum > 1) {
            pubnum = 0;
        }
        siteSlider(pubnum);
        webtab(pubnum);
    });

    $(".web_tab>ul>li").click(function () {
        var pubLi = $(this).index();
        webtab(pubLi);
        pubnum = pubLi;
        siteSlider(pubnum);
    });

    //퍼블리싱 슬라이드 함수
    function siteSlider(siteSlider) {
        $(".siteSlider>ul>li").removeClass("on");
        $(".siteSlider>ul>li").eq(siteSlider).addClass("on");
        $(".Rweb_site>ul>li").removeClass("on");
        $(".Rweb_site>ul>li").eq(siteSlider).addClass("on");
    }
    // 퍼블리싱 탭메뉴 함수
    function webtab(pubslide) {
        $(".web_tab>ul>li").removeClass("on");
        $(".web_tab>ul>li").eq(pubslide).addClass("on");
    }



    //아래 퍼블리싱
    var pubnum = 0;
    $(".pub_arrow>.left").click(function () {
        pubnum--;
        if (pubnum < 0) {
            pubnum = 1;
        }
        pubslider(pubnum);
        pubtab(pubnum);
    });

    $(".pub_arrow>.right").click(function () {
        pubnum++;
        if (pubnum > 1) {
            pubnum = 0;
        }
        pubslider(pubnum);
        pubtab(pubnum);
    });

    $(".pub_tab>ul>li").click(function () {
        var pubLi = $(this).index();
        pubtab(pubLi);
        pubnum = pubLi;
        pubslider(pubnum);

    });

    //퍼블리싱 슬라이드 함수
    function pubslider(pubslide) {
        $(".pubSlider>ul>li").removeClass("on");
        $(".pubSlider>ul>li").eq(pubslide).addClass("on");
        $(".Rpub_site>ul>li").removeClass("on");
        $(".Rpub_site>ul>li").eq(pubslide).addClass("on");
    }
    // 퍼블리싱 탭메뉴 함수
    function pubtab(pubslide) {
        $(".pub_tab>ul>li").removeClass("on");
        $(".pub_tab>ul>li").eq(pubslide).addClass("on");
    }
























































})//opening