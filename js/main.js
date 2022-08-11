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
    // $('.web_tab>ul>li').click(function () {
    //     $(this).css({
    //         color: '#752ea1'
    //     }).siblings().css({
    //         color: '#000'
    //     })
    //     let i = $(this).index();
    //     $('.siteSlider>ul>li').eq(i).show().siblings().hide();
    //     $('.Rweb_site>ul>li').eq(i).show().siblings().hide();
    // });

    // $('.pub_tab ul li').on('click', function () {
    //     $(this).css({
    //         color: '#752ea1'
    //     }).siblings().css({
    //         color: '#000'
    //     })
    //     let i = $(this).index();
    //     $('.pubsite>ul>li').eq(i).show().siblings().hide();
    //     $('.Rpub_site>ul>li').eq(i).show().siblings().hide();
    // });

    var $skillVar = $('.skill>ul>li>p>span:nth-child(2)');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $skillVar.addClass('skill_bar');
        } else {
            $skillVar.removeClass('skill_bar');
        }
    });


    // $(".pub_tab>ul>li").click(function () {
    //     var pubLi = $(this).index();
    //     pubtab(pubLi);
    //     pubnum = pubLi;
    //     pubslider(pubnum);
    //     // $(".pub_tab>ul>li").removeClass("on");
    //     // $(this).addClass("on");

    // });

    // function pubslider(pubslide){
    //     $(".siteSlider>ul>li").removeClass("on");
    //     $(".siteSlider>ul>li").eq(pubslide).addClass("on");
    //     $(".R_pub>ul>li").removeClass("on");
    //     $(".R_pub>ul>li").eq(pubslide).addClass("on");
    //   }
    //   // 퍼블리싱 탭메뉴 함수
    //   function pubtab(pubslide){
    //     $(".pub_tab>ul>li").removeClass("on");
    //     $(".pub_tab>ul>li").eq(pubslide).addClass("on");
    //   }


    //퍼블리싱
    var pubnum = 0;
    $(".pub_controler>.prev").click(function () {
        pubnum--;
        if (pubnum < 0) {
            pubnum = 1;
        }
        pubslider(pubnum);
        pubtab(pubnum);
        // $(".siteSlider").children().removeClass("on");
        // $(".siteSlider").children().eq(pubnum).addClass("on");
        // $(".R_pub>ul>li").removeClass("on");
        // $(".R_pub>ul>li").eq(pubnum).addClass("on");
    });

    $(".pub_controler>.next").click(function () {
        pubnum++;
        if (pubnum > 1) {
            pubnum = 0;
        }
        pubslider(pubnum);
        pubtab(pubnum);
        // $(".siteSlider").children().removeClass("on");
        // $(".siteSlider").children().eq(pubnum).addClass("on");
        // $(".R_pub>ul>li").removeClass("on");
        // $(".R_pub>ul>li").eq(pubnum).addClass("on");
    });

    $(".web_tab>ul>li").click(function () {
        var pubLi = $(this).index();
        pubtab(pubLi);
        pubnum = pubLi;
        pubslider(pubnum);
        // $(".pub_tab>ul>li").removeClass("on");
        // $(this).addClass("on");

    });

    //퍼블리싱 슬라이드 함수
    function pubslider(pubslide) {
        $(".siteSlider>ul>li").removeClass("on");
        $(".siteSlider>ul>li").eq(pubslide).addClass("on");
        $(".Rweb_site>ul>li").removeClass("on");
        $(".Rweb_site>ul>li").eq(pubslide).addClass("on");
    }
    // 퍼블리싱 탭메뉴 함수
    function pubtab(pubslide) {
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
        // $(".siteSlider").children().removeClass("on");
        // $(".siteSlider").children().eq(pubnum).addClass("on");
        // $(".R_pub>ul>li").removeClass("on");
        // $(".R_pub>ul>li").eq(pubnum).addClass("on");
    });

    $(".pub_arrow>.right").click(function () {
        pubnum++;
        if (pubnum > 1) {
            pubnum = 0;
        }
        pubslider(pubnum);
        pubtab(pubnum);
        // $(".siteSlider").children().removeClass("on");
        // $(".siteSlider").children().eq(pubnum).addClass("on");
        // $(".R_pub>ul>li").removeClass("on");
        // $(".R_pub>ul>li").eq(pubnum).addClass("on");
    });

    $(".pub_tab>ul>li").click(function () {
        var pubLi = $(this).index();
        pubtab(pubLi);
        pubnum = pubLi;
        pubslider(pubnum);
        // $(".pub_tab>ul>li").removeClass("on");
        // $(this).addClass("on");

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