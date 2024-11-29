$(function () {
  /* 커서 */
  var cursor = $(".cursor"),
    follower = $(".cursor-follower");

  var posX = 0,
    posY = 0;

  var mouseX = 0,
    mouseY = 0;

  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set(follower, {
        css: {
          left: posX - 12,
          top: posY - 12,
        },
      });
      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });

  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  $("a").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
  });

  $("a").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
  });

  /* 네비바 나타나기 */
  setTimeout(function () {
    $(".navbar").addClass("show");
  }, 400);

  function updateNavbar() {
    if (window.innerWidth >= 1024) {
      $(".navbar").css("display", "flex").addClass("show");
      $(".burger i").removeClass("fa-xmark").addClass("fa-bars");
    } else {
      $(".navbar").css("display", "none");
      $(".burger i").removeClass("fa-xmark").addClass("fa-bars");
    }
  }
  $(window).on("resize", updateNavbar);
  updateNavbar();

  /* 햄버거 toggle */
  $(".burger").click(function () {
    $(this).find("i").toggleClass("fa-bars fa-xmark");
    $(".navbar")
      .slideToggle("slow", function () {
        if ($(this).is(":visible")) {
          $(this).css("display", "flex");
        }
      })
      .toggleClass("active");
  });

  //현재 테마 확인
  let testTheme = localStorage.getItem("theme");
  console.log("current get theme: " + testTheme);

  // 다크 라이트 모드 전환하기
  function setTheme(mode) {
    const $root = $("html");
    if (mode === "dark") {
      $root.attr("dark-mode", "").removeAttr("light-mode");
      $(".themeDarkLight").removeClass("light").addClass("dark");
    } else {
      $root.attr("light-mode", "").removeAttr("dark-mode");
      $(".themeDarkLight").removeClass("dark").addClass("light");
    }
    localStorage.setItem("theme", mode);
    console.log("set theme: " + localStorage.theme);
  }

  // 시스템 테마를 확인하고 초기 테마 설정
  function initTheme() {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // 초기 테마 적용
  initTheme();

  // 시스템 테마 변경 시 테마 적용
  $(window).on("matchMedia", function (e) {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });

  // 다크/라이트 모드 토글 함수
  function toggleTheme() {
    const $root = $("html");
    if ($root.attr("dark-mode") !== undefined) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  // .themeDarkLight 아이콘 클릭 이벤트 리스너
  $(".themeDarkLight").on("click", toggleTheme);
}); /* ready */
