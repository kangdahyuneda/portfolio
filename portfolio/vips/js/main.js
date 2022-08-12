$(function () {
    $('#mainVisual').slick({
        slidesToShow: 1, // 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, // 스크롤시 이동할 이미지 갯수
        arrows: true, // 화살표 사용 여부 
        dots: false, // 페이저 사용 여부
        speed: 1000, // 다음 페이지로 넘어가는 시간
        autoplay: false, //자동재생 여부
        autoplaySpeed: 1000, // 자동재생 시 이미지가 유지되는 시간
        pauseOnHover: true, //마우스 hover시 자동재생 멈춤 여부
        infinite: true, // 무한반복 여부
        vertical: false, // 세로 슬라이드
    });

    $('.cont1in').slick({
        slidesToShow: 3, // 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, // 스크롤시 이동할 이미지 갯수
        arrows: false, // 화살표 사용 여부 
        dots: true, // 페이저 사용 여부
        speed: 1000, // 다음 페이지로 넘어가는 시간
        autoplay: true, //자동재생 여부
        autoplaySpeed: 1000, // 자동재생 시 이미지가 유지되는 시간
        pauseOnHover: false, //마우스 hover시 자동재생 멈춤 여부
        infinite: true, // 무한반복 여부
        vertical: false, // 세로 슬라이드
    });


    $('.tit1 li').on('click', function () {
        $(this).css({
            backgroundColor: '#a70000',
            color: '#fff'
        }).siblings().css({
            backgroundColor: '#fff',
            color: '#2e2e2e'
        })
        let i = $(this).index();
        $('.slider>div').eq(i).show().siblings().hide();
    });


    $('.gift').slick({
        slidesToShow: 1, // 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, // 스크롤시 이동할 이미지 갯수
        arrows: false, // 화살표 사용 여부 
        dots: false, // 페이저 사용 여부
        speed: 1000, // 다음 페이지로 넘어가는 시간
        autoplay: true, //자동재생 여부
        autoplaySpeed: 3000, // 자동재생 시 이미지가 유지되는 시간
        pauseOnHover: true, //마우스 hover시 자동재생 멈춤 여부
        infinite: true, // 무한반복 여부
        vertical: false, // 세로 슬라이드
    });

    $('.gnb').on('mouseenter', function () {
        $(this).stop().animate({
            height: 200
        }, 600);
        $('.subBG').stop().slideDown(600);

    }).on('mouseleave', function () {
        $(this).stop().animate({
            height: 40
        }, 600);
        $('.subBG').stop().slideUp(600);

    });


    let winHeight = $(window).height();

    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('.page li').on('click', function () {
        let i = $(this).index();

        $('html,body').animate({
            scrollTop: winHeight * i
        });

    });
    function scrollPage() {
        let scr = $(window).scrollTop();
        for (let i = 0; i < $('.page li').length; i++) {
            if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
                $('.page li').removeClass('on');
                $('.page li').eq(i).addClass('on');
            }
        }
    }

    $(window).on('scroll', scrollPage);
    scrollPage();

    $('#wrap section').on('mousewheel', function (e, d) {
        if (d > 0) { // 스크롤을 올렸을 때
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) { //스크롤을 내렸을 때
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            });
        }
    })



})//opening
