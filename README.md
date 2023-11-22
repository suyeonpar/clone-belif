# [belif clone-coding](https://suyeonpar.github.io/clone-belif/)

## 빌리프 클론 코딩

![image](https://github.com/suyeonpar/clone-belif/assets/142365626/104b397d-1e9e-45dd-b95c-fa48f1654d95)

### * 내가 이 사이트를 선정한 이유


해당 사이트를 선정한 이유는 첫번째, 복잡한 디자인 보다는
한눈에 알아보기 쉬운, 심플하면서 사이트의 주제가 확실히 드러나는 것을 
추구하기 때문
빌리프 사이트가 그에 딱 적합했던 것 같다!

깔끔하면서 심플한 디자인과 이러한 디자인이 자칫 단조로워 보일 수 있기에 
글자에 움직이는 모션을 주어 심플하면서도 포인트를 준 것이 마음에 들었다.

### * 기술 스택


#### Environmnet

![image](https://github.com/suyeonpar/clone-belif/assets/142365626/40429fb4-d844-4ea9-b9cd-f2f9f89fbd79)



#### Development

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">


### 처음으로 해본 클론코딩..

그린아트컴퓨터학원은 수강하면서 처음으로 만들어 본 클론코딩이다..
지금와서 보면 정말 하드코딩에 가독성이 떨어지는 코드라 좀 부끄럽기까지한..

시간이 좀 더 흐르면 이 코드는 다시 클린코딩으로 바꿀 것이다. 꼭꼭 !

자바스크립트도 많이 활용하지 못 해서 이부분도 꼭 수정해보고싶다.

코드는 나중에 React로 수정 할 것이니 간단하게 자바스크립트 부분만 코드 분석을 해보겠다!

### 탑슬라이드

```js
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
```

슬라이드는 그래도 기본적으로 구현할 수 있어야지~

3초마다 화면이 바뀌는 슬라이드를 만들기 위해 setInterval을 사용하여 코드를 만들어 주었다.

그 다음 autoPlay함수를 만들어 Topslide의 idx 0번부터 차례로 하나씩 보이게 코드를 짜 주었다.


### 메인배너 슬라이드

```js
$(".slick.content-slick").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: false
});
```
메인배너는 크게 필요한 코드없이 간단하게 구현하면된다!
slick슬라이드라는 좋은 라이브러리가 있기 때문에 사용해주었다. 

정말 쉽고 간편하게 슬라이드 완성!


### 스와이퍼도 사용해볼까

베스트상품, 이달의 상품, md추천 카테고리, 공지사항 모두 슬라이더가 필요하다

slick슬라이더 보다 많이 활용하는 swiperslide라는 라이브러리가 있지~

위 4개의 카테고리는 모두 swiperslide를 사용해준다

```js
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
```

swiper 쓰는것에는 크게 문제가 없다. 대신 작명만 안헷갈리게 잘 해준다면...

4개의 콘텐츠에 swiper가 사용되다보니 작명을 잘 해줘야한다는 생각지도 못한 어려움이 있었다

