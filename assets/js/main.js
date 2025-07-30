/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Offcanvas Menu Js
04. Search Overlay Js
05. Header Sticky Js
06. Back To Top Js
07. Pagination Active Js
08. Social Plus Hovert Js
09. SimpleLightbox Initialization Js
10. Tab Js 
11. Portfolio filter Js
12. Application Form Page Js
13. Info Counter Js V1
14. Testimonial Swiper Js
15. Service Swiper Js
16. Testimonial-v2 Swiper Js
17. Event Swiper Js
18. Slider-v2 Swiper Js
19. Event Counter Js
20. Previous Event Swiper
21. Custom Cursor
22. Animate Js
23. Form Massage distination js
****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  // Remove preloader on page load
  $(window).on("load", function () {
  $("#preloader").css({
    opacity: "0",
    transition: "opacity 0.8s ease"
  });
  setTimeout(() => {
    $("#preloader").css("display", "none");
  }, 800);
 });




  ////////////////////////////////////////////////////
  // 21. Custom Cursor JS
  const cursor = document.querySelector(".custom-cursor");
  const follower = document.querySelector(".custom-cursor-follower");

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // Smooth follower movement
  function animateFollower() {
    followerX += (mouseX - followerX) / 8;
    followerY += (mouseY - followerY) / 8;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animateFollower);
  }
  animateFollower();
  
  ////////////////////////////////////////////////////
  // 22. Header V2 Top Notification JS
 $('.animate-item').each(function (index) {
    let $item = $(this);
    setTimeout(function () {
      $item.addClass('show');
    }, index * 400); // 400ms delay between each
  });

  ////////////////////////////////////////////////////
  // 22. Gallery Load More Button JS
  function initLoadMore(config) {
    const $items = $(config.itemSelector);
    const $button = $(config.buttonSelector);
    const initialCount = config.initialVisible || 9;
    const loadCount = config.itemsPerClick || 3;

    $items.each(function(index) {
      if (index >= initialCount) {
        $(this).hide();
      }
    });

    if ($items.length <= initialCount) {
      $button.hide();
    }

    let currentVisible = initialCount;

    $button.on('click', function() {
      $items.slice(currentVisible, currentVisible + loadCount).slideDown();
      currentVisible += loadCount;

      if (currentVisible >= $items.length) {
        $button.hide();
      }
    });
  }

  initLoadMore({
    itemSelector: '.portfolio-section .portfolio-item',
    buttonSelector: '#loadMoreBtn',
    initialVisible: 9,
    itemsPerClick: 3
  });

  // 02. Mobile Menu Js
  ////////////////////////////////////////////////////
  // mobile menu 

  var stMenuWrap = $('.mobile-menu-active > ul').clone();
  var stSideMenu = $('.offcanvas-menu nav');
  stSideMenu.append(stMenuWrap);

  // Add toggle buttons for all submenu/megamenu
  stSideMenu.find('.submenu, .mega-menu, .sub-submenu').each(function () {
    if (!$(this).siblings('.menu-close').length) {
      $(this)
        .parent()
        .addClass('has-dropdown') // optional class
        .append('<button class="menu-close"><i class="ri-arrow-right-s-line"></i></button>');
    }
  });

  // Accordion toggle logic
  $('.offcanvas-menu').on('click', 'button.menu-close, li.has-dropdown > a', function (e) {
    e.preventDefault();

    const parentLi = $(this).closest('li');
    const submenu = parentLi.children('.submenu, .mega-menu, .sub-submenu');

    if (!parentLi.hasClass('active')) {
      // Close siblings at same level
      parentLi
        .siblings('.active')
        .removeClass('active')
        .children('.submenu, .mega-menu, .sub-submenu')
        .slideUp(300);

      // Open current
      parentLi.addClass('active');
      submenu.slideDown(300);
    } else {
      // Close current
      parentLi.removeClass('active');
      submenu.slideUp(300);
    }
  });

  ////////////////////////////////////////////////////
  // 23. From Massage Js
  $('#contactForm').submit(function (e) {
      e.preventDefault(); 

      const formData = $(this).serialize(); 

      $.ajax({
        type: 'POST',
        url: 'mail.php', 
        data: formData,
        success: function (response) {
          $('#formMessage').removeClass('error').addClass('success').html(response); 
          $('#contactForm')[0].reset(); 
        },
        error: function () {
          $('#formMessage').removeClass('success').addClass('error').html('Something went wrong. Please try again.');
        }
      });
  });

  ////////////////////////////////////////////////////
  // 03. Off-canvas Menu Js
  // offcanvas
  $(".offcanvas-open-btn").on("click", function () {
    $(".offcanvas-area").addClass("opened");
    $(".body-overlay").addClass("opened");
  });
  $(".offcanvas-close-btn").on("click", function () {
    $(".offcanvas-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  // // Body overlay Js
  $(".body-overlay").on("click", function () {
    $(".offcanvas-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 04. Search Overlay Js
function initializeSearchOverlay() {
  const searchIcon = $(".search-icon");
  const searchOverlay = $(".search-overlay");
  const closeSearch = $(".close-search");

  searchIcon.on("click", function (e) {
    e.preventDefault();
    searchOverlay.addClass("active");
  });

  closeSearch.on("click", function (e) {
    e.preventDefault();
    searchOverlay.removeClass("active");
  });

  $(window).on("click", function (event) {
    if ($(event.target).is(searchOverlay)) {
      searchOverlay.removeClass("active");
    }
  });
}
initializeSearchOverlay();


  ////////////////////////////////////////////////////
  // 05. Header Sticky Js
  $(window).on('scroll', function () {
    const header = $('.sticky-header');
    if ($(window).scrollTop() > 200) {
      header.addClass('sticky');
    } else {
      header.removeClass('sticky');
    }
  });

  ////////////////////////////////////////////////////
  // 06. Back To Top Js
  const backToTopButton = $('.back-to-top');

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > 300) {
      backToTopButton.addClass('show');
    } else {
      backToTopButton.removeClass('show');
    }
  });

  backToTopButton.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });

  ////////////////////////////////////////////////////
  // 07. Social Plus Hovert Js
  const plusIcons = $('.social-plus-icon');

  if (plusIcons.length) {
    plusIcons.on('mouseenter', function () {
      $(this).addClass('active');
    });

    plusIcons.on('mouseleave', function () {
      $(this).removeClass('active');
    });
  }

  ////////////////////////////////////////////////////
  // 08. Pagination Active Js
  $('.custom-pagination').on('click', '.page-item', function (e) {
    e.preventDefault();
    $('.custom-pagination .page-item').removeClass('active');
    $(this).addClass('active');
  });

  ////////////////////////////////////////////////////
  // 09. SimpleLightbox Initialization Js
  const sections = ['.gallery-section', '.site-footer'];

  sections.forEach(function (selector) {
    if ($(selector).length) {
      new SimpleLightbox(`${selector} .lightbox`, {
        captions: false,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        nav: true,
        navText: ['←', '→'],
        close: true,
        showCounter: true,
        animationSpeed: 300,
        fadeSpeed: 300,
      });
    }
  });
  ////////////////////////////////////////////////////
  // 10. Tab Js
  const tabLinks = $(".tab-buttons a");
  const tabContents = $(".tab-content");

  tabLinks.on('click', function (e) {
    e.preventDefault();

    tabLinks.removeClass("active");
    $(this).addClass("active");

    const tabId = $(this).data("tab");
    tabContents.each(function () {
      if ($(this).attr('id') === tabId) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });

  ////////////////////////////////////////////////////
  // 11. Portfolio filter Js
  $('.portfolio-tabs input[name="portfolio-tab"]').on('change', function () {
    const value = $(this).val();
    const $items = $('.portfolio-item');

    $items.hide();
    if (value === 'event') {
      $items.fadeIn(300);
    } else {
      $items.each(function () {
        if ($(this).hasClass(value)) {
          $(this).fadeIn(300);
        }
      });
    }
  });

  ////////////////////////////////////////////////////
  // 12. Application Form Page Js
  function setupCustomFileInput(inputSelector) {
    $(inputSelector).on('change', function () {
      const fileName = this.files.length > 0 ? this.files[0].name : 'No File Chosen';
      $(this).closest('.file-input-label').find('.file-name').text(fileName);
    });
  }
  setupCustomFileInput('.upload-file-area');

  const swiper = new Swiper('.swiperHero', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  ////////////////////////////////////////////////////
  // 13. Info Counter Js V1
  let count = $(".single-counter");
  let arr = count.toArray();

  let duration = 2000;
  let interval = 10;
  let steps = duration / interval;

  arr.forEach(function (item) {
    let target = parseInt($(item).data('number'), 10);
    let current = 0;
    let increment = target / steps;

    let stop = setInterval(function () {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(stop);
      }

      $(item).html(Math.floor(current) + "+");
    }, interval);
  });


  ////////////////////////////////////////////////////
  // 14. Testimonial Swiper Js
  const thumbSwipper = new Swiper('.thumbs-swiper', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });

  const mainImage = $('#mainImage');
  const clientText = $('.client-text p');
  const clientName = $('.client-info h6');
  const clientPosition = $('.client-info span');
  const reviewStarsContainer = $('.client-review ul');

  function updateStars(rating) {
    reviewStarsContainer.empty();
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? 'ri-star-fill' : 'ri-star-line';
      reviewStarsContainer.append(`<li><i class="${starClass}"></i></li>`);
    }
  }

  function updateMainContentFromSlide(slide) {
    const $slide = $(slide);
    const imgSrc = $slide.data('img');
    const name = $slide.data('name');
    const message = $slide.data('message');
    const position = $slide.data('position') || '';
    const rating = parseInt($slide.data('rating'), 10) || 0;

    clientText.addClass('fade-out');
    mainImage.addClass('fade-out');

    setTimeout(() => {
      mainImage.attr('src', imgSrc);
      clientText.text(message);
      clientName.text(name);
      clientPosition.text(position);
      updateStars(rating);

      clientText.removeClass('fade-out');
      mainImage.removeClass('fade-out');
    }, 200);
  }

  function updateActiveSlideContent() {
    $('.thumbs-swiper .swiper-slide').removeClass('swiper-slide-thumb-active');

    const activeThumb = thumbSwipper.slides[thumbSwipper.activeIndex];
    if (activeThumb) {
      $(activeThumb).addClass('swiper-slide-thumb-active');
      updateMainContentFromSlide(activeThumb);
    }
  }

  thumbSwipper.on('slideChange', updateActiveSlideContent);

  $('.thumbs-swiper .swiper-slide').each(function (index, slide) {
    $(slide).on('click', () => {
      thumbSwipper.slideToLoop(index);
    });
  });

  updateActiveSlideContent();

  ////////////////////////////////////////////////////
  // 15. Service Swiper Js
  const serviceSwiper = new Swiper(".serviceSwiper", {
    slidesPerView: 1,
    spaceBetween: 0, 
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 16. Testimonial-v2 Swiper Js
  const testimonialSwiper = new Swiper(".testimonialv2Slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 17. Event Swiper Js
  const eventSwiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  ////////////////////////////////////////////////////
  // 18. Slider-v2 Swiper Js
  const sliderSwiper = new Swiper(".sliderSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}" data-index="${index + 1}">
            <span class="bullet-line"></span>
            <span class="bullet-circle"></span>
          </span>
        `;
      },
    },
    observer: true,
    observeParents: true,
    on: {
      init: function () {
        setTimeout(() => {
          animateSlide(this.slides[this.activeIndex]);
        }, 50);
      },
      slideChangeTransitionStart: function () {
        removeAnimations();
      },
      slideChangeTransitionEnd: function () {
        animateSlide(this.slides[this.activeIndex]);
      },
    }
  });

  // Remove animation classes
  function removeAnimations() {
    $('.banner-content-wrapper').removeClass('animate-from-left');
    $('.banner-image-wrapper').removeClass('animate-from-right');
  }

  // Add animation classes to active slide
  function animateSlide(slideEl) {
    if (!slideEl) return;
    const left = $(slideEl).find('.banner-content-wrapper');
    const right = $(slideEl).find('.banner-image-wrapper');
    if (left.length) left.addClass('animate-from-left');
    if (right.length) right.addClass('animate-from-right');
  }

  ////////////////////////////////////////////////////
  // 19. Event Counter Js
  function updateCountdowns() {
    $('.event-overlay-countdown').each(function () {
      const block = $(this);
      const targetDate = new Date(block.attr('data-date')).getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      let days = 0, hours = 0, minutes = 0, seconds = 0;

      if (distance > 0) {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }

      block.find('.days').text(days.toString().padStart(2, '0'));
      block.find('.hours').text(hours.toString().padStart(2, '0'));
      block.find('.minutes').text(minutes.toString().padStart(2, '0'));
      block.find('.seconds').text(seconds.toString().padStart(2, '0'));
    });
  }
  updateCountdowns();
  setInterval(updateCountdowns, 1000);

  ////////////////////////////////////////////////////
  // 20. Previous Event Swiper
  const prevEventSwiper = new Swiper(".previousEventSwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });

  ////////////////////////////////////////////////////
  // 21. Header V2 Top Notification JS
  const notifications = document.querySelectorAll(".header-top-notification .notification-header");
  let currentIndex = 0;

  if (notifications.length === 0) return;

  notifications.forEach((el, index) => {
    el.style.opacity = index === 0 ? 1 : 0;
    el.style.transform = index === 0 ? "translateY(0)" : "translateY(100%)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    el.style.position = "absolute";
    el.style.width = "100%";
  });

  function showNextNotification() {
    notifications[currentIndex].style.opacity = 0;
    notifications[currentIndex].style.transform = "translateY(100%)";

    currentIndex = (currentIndex + 1) % notifications.length;

    notifications[currentIndex].style.opacity = 1;
    notifications[currentIndex].style.transform = "translateY(0)";

    setTimeout(showNextNotification, 5000);
  }

  setTimeout(showNextNotification, 5000);


  //No-js JS
  $("html").removeClass("no-js").addClass("js");

})(jQuery);

