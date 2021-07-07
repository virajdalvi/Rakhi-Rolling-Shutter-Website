/* Template: Blink SaaS App Website Bootstrap HTML Template
   Description: Custom JS file
*/

(function ($) {
  "use strict";

  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on("scroll load", function () {
    if ($(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          600,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  // offcanvas script from Bootstrap + added element to close menu on click in small viewport
  $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on(
    "click",
    function () {
      $(".offcanvas-collapse").toggleClass("open");
    }
  );

  // hover in desktop mode
  function toggleDropdown(e) {
    const _d = $(e.target).closest(".dropdown"),
      _m = $(".dropdown-menu", _d);
    setTimeout(
      function () {
        const shouldOpen = e.type !== "click" && _d.is(":hover");
        _m.toggleClass("show", shouldOpen);
        _d.toggleClass("show", shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
      },
      e.type === "mouseleave" ? 300 : 0
    );
  }
  $("body")
    .on("mouseenter mouseleave", ".dropdown", toggleDropdown)
    .on("click", ".dropdown-menu a", toggleDropdown);

  /* Image Slider - Swiper */
  var imageSlider = new Swiper(".image-slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 50,
    slidesPerView: 5,
    breakpoints: {
      // when window is <= 575px
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window is <= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window is <= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window is <= 1199px
      1199: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  /* Card Slider - Swiper */
  var cardSlider = new Swiper(".card-slider", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      // when window is <= 991px
      991: {
        slidesPerView: 1,
      },
    },
  });

  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function () {
    if ($(this).val() != "") {
      $(this).addClass("notEmpty");
    } else {
      $(this).removeClass("notEmpty");
    }
  });

  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });
})(jQuery);
/*For products*/
