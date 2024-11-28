$(document).ready(function () {
    const animationOptions = {
      ease: "expo.inOut",
    };

    const introAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: animationOptions.ease,
          duration: 0.8,
        },
      });

      tl.to(".intro__title", {
        duration: 1.0,
        y: 0,
        autoAlpha: 1,
        delay: 0.5,
      })
        .to(".intro__background--left, .intro__background--right", {
          scaleX: 1,
        })
        .to(".intro__background--left, .intro__background--right", {
          scaleY: 0,
          transformOrigin: "top center",
        })
        .to(
          ".intro__title",
          {
            duration: 1.0,
            y: -60,
            autoAlpha: 0,
          },
          "-=0.6"
        )
        .to(
          ".intro",
          {
            y: "-100%",
          },
          "-=0.5"
        );

      return tl;
    };

    const skewInElements = (elements) => {
      const tl = gsap.timeline();

      tl.from(elements, {
        duration: 0.8,
        ease: animationOptions.ease,
        skewY: -5,
        autoAlpha: 0,
        y: 40,
      });

      return tl;
    };

    const fadeInElements = (elements) => {
      const tl = gsap.timeline();

      tl.from(elements, {
        duration: 0.8,
        ease: animationOptions.ease,
        y: "20px",
        autoAlpha: 0,
        stagger: 0.1,
      });

      return tl;
    };

    const popUpElements = (elements) => {
      const tl = gsap.timeline();
      tl.to(elements, {
        duration: 0,
        onComplete: function() {
          setTimeout(function() {
            $(elements).addClass('show');
          }, 400);
        }
      });
    
      return tl;
    };

    const master = gsap.timeline({
      paused: false,
      delay: 0.2,
    });

    master
      .add(introAnimation())
      .add(fadeInElements(".themeDarkLight"))
      .add(skewInElements("home_image, .home_contents, .img_laptop"), "-=1")
      .add(popUpElements(".navbar"));

    
}); /* ready */
