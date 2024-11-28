$(function () {
  /* 초기 로드 타임 아웃 */
  setTimeout(function () {
    type();
  }, 400);

  /* 타이핑 시작 */
  const $typedTextSpan = $(".typed-text");
  const $cursorSpan = $(".cursor");

  const textArray = ["a web designer", "a web developer", "an illustrator"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 1000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!$cursorSpan.hasClass("typing")) $cursorSpan.addClass("typing");
      $typedTextSpan.text(
        $typedTextSpan.text() + textArray[textArrayIndex].charAt(charIndex)
      );
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      $cursorSpan.removeClass("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!$cursorSpan.hasClass("typing")) $cursorSpan.addClass("typing");
      $typedTextSpan.text(
        textArray[textArrayIndex].substring(0, charIndex - 1)
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      $cursorSpan.removeClass("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  /* 타이핑 끝 */

  /* iphone swiper */
  console.log("Swiper 초기화 테스트");
  let swiper01 = new Swiper(".iphone", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".iphone .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  /* 스크롤하다가 나타나는 이벤트들 */
  function onScroll() {
    skillVisible();
    showSubheading();
    markGnb();
  }
  $(window).on("scroll", onScroll);
  onScroll();

  /* index.html section.skill 바 스스륵 나타나기 */
  function skillVisible() {
    for (let i = 1; i <= 5; i++) {
      let item = $(`.skill${i} .pseudoLine`);
      let rect = item.get(0).getBoundingClientRect();
      //get(0): article 선택자만 선택
      //getBoundingClientRect() 위치크기정보

      if (
        rect.top < window.innerHeight * 0.65 &&
        rect.bottom > window.innerHeight * 0.3
      ) {
        $(`.skill${i}`).addClass("view");
      } else {
        $(`.skill${i}`).removeClass("view");
      }
    }
  }

  /* subheading 스르륵 나타나기 */
  function showSubheading() {
    $(".subheading").each(function () {
      let $this = $(this);
      let rect = this.getBoundingClientRect();
      let windowHeight = $(window).height();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        $this.addClass("visible");
        // console.log('test:visible');
      } else {
        $this.removeClass("visible");
        // console.log('test:invisible');
      }
    });
  }

  /* gnb 메뉴 해당 섹선에서 색깔 바뀌기 */
  function markGnb() {
    $("main section").each(function (index) {
      let sectionTop = $(this).offset().top;
      let windowHeight = $(window).height();
      let sectionId = $(this).attr("id");

      if (sectionTop <= $(window).scrollTop() + windowHeight * 0.8) {
        $("ul.gnb > li > a").removeClass("mark");
        $("ul.gnb > li > a").eq(index).addClass("mark"); //
        console.log("section " + (index + 1) + " is visible");
      } else {
        console.log("section " + (index + 1) + " is invisible");
      }
    });
  }

  /* contact-alert */
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    alert(
      "The contact form is currently under maintenance. Please send an email to the provided address. \n\n연락처 양식은 현재 유지보수 중입니다. 이메일을 보내주세요."
    );
  });
}); /* ready */
