$(function () {
    $('.simg_m').slick({
        slidesToShow: 1, // 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, // 스크롤시 이동할 이미지 갯수
        arrows: false, // 화살표 사용 여부 
        dots: true, // 페이저 사용 여부
        speed: 1000, // 다음 페이지로 넘어가는 시간
        autoplay: true, //자동재생 여부
        autoplaySpeed: 1000, // 자동재생 시 이미지가 유지되는 시간
        pauseOnHover: true, //마우스 hover시 자동재생 멈춤 여부
        infinite: false, // 무한반복 여부
        vertical: true, // 세로 슬라이드
    });

    /* $('.t_img').slick({
        slidesToShow: 1, // 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, // 스크롤시 이동할 이미지 갯수
        arrows: true, // 화살표 사용 여부 
        dots: false, // 페이저 사용 여부
        speed: 1000, // 다음 페이지로 넘어가는 시간
        autoplay: true, //자동재생 여부
        autoplaySpeed: 1000, // 자동재생 시 이미지가 유지되는 시간
        pauseOnHover: true, //마우스 hover시 자동재생 멈춤 여부
        infinite: false, // 무한반복 여부
    }); */

    $('.t_img').slick({
        arrows: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $('.sl_img').slick({
        arrows: false,
        slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.btnMenu').on('click', function () {
        $('.m_gnb').show();
    });
    $('.fa-xmark').on('click', function () {
        $('.m_gnb').hide();
    });

    $('.pager li a').on('click', function (e) {
        e.preventDefault();

        let txt = $(this).text();
        $('.simg_m').css({
            backgroundImage: `url(img/mainVisual_m_${txt}.jpg)`
        });

    });

    $('.push').on('click', function () {
        $('.market_mb div').find('img').attr('src', 'img/cont4_mmap_color.png')
    });



    $('.gnb').on('mouseenter', function () {
        $('.sub').stop().animate({
            height: 200
        }, 600);

    }).on('mouseleave', function () {
        $('.sub').stop().animate({
            height: 0
        }, 600);

    });

    $('.simg_tablet').slick({
        slidesToShow: 1, // 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, // 스크롤시 이동할 이미지 갯수
        arrows: false, // 화살표 사용 여부 
        dots: true, // 페이저 사용 여부
        speed: 3000, // 다음 페이지로 넘어가는 시간
        autoplay: true, //자동재생 여부
        autoplaySpeed: 1000, // 자동재생 시 이미지가 유지되는 시간
        pauseOnHover: true, //마우스 hover시 자동재생 멈춤 여부
        infinite: false, // 무한반복 여부
        vertical: true, // 세로 슬라이드
    });

    $('.simg_pc').slick({
        slidesToShow: 1, // 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, // 스크롤시 이동할 이미지 갯수
        arrows: false, // 화살표 사용 여부 
        dots: true, // 페이저 사용 여부
        speed: 3000, // 다음 페이지로 넘어가는 시간
        autoplay: true, //자동재생 여부
        autoplaySpeed: 1000, // 자동재생 시 이미지가 유지되는 시간
        pauseOnHover: true, //마우스 hover시 자동재생 멈춤 여부
        infinite: false, // 무한반복 여부
        vertical: true, // 세로 슬라이드
    });

    $('.seoul').on('click', function () {
        $('.light').find('img').attr('src', 'img/cont4_map_seoul.png')
    });

    $('.k').on('click', function () {
        $('.light').find('img').attr('src', 'img/cont4_map_k.png')
    });

    $('.yong').on('click', function () {
        $('.light').find('img').attr('src', 'img/cont4_map_p.png')
    });































})//opening
