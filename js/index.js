// 탑 슬라이드
const $Topslide = document.querySelectorAll(".top-slide ul li")

$Topslide[0].classList.add("on")

idx = 0;

let timer = setInterval(autoPlay, 3000)

function autoPlay(){
  $Topslide[idx].style.display = "none";
  idx++;
  if(idx > $Topslide.length - 1){
    idx = 0;
  }
  $Topslide[idx].style.display = "block";
}
// 탑 슬라이드 끝

//메인배너 슬라이드
$(".slick.content-slick").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: false
});

// 베스트 상품 swiper-slide
const best_swiper = new Swiper(".swiper.main-swiper",{
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  slidesPerView: 3
});


// 이달의 상품 스와이퍼
const month_swiper = new Swiper(".month-category .swiper.month-swiper",{
  navigation: {
    nextEl: ".month-category .swiper-button-next",
    prevEl: ".month-category .swiper-button-prev",
  },
  slidesPerView: 4
});

// md 추천 스와이퍼 세로
const md_swiper = new Swiper(".swiper.md-swiper",{
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});

//공지사항(notice) 슬라이드
const noticeSwiper = new Swiper(".swiper.notice-swiper",{
  navigation: {
    prevEl: ".btn-pre",
    nextEl: ".bnt-nex",
    moreEL: ".btn-more"
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 1
});
