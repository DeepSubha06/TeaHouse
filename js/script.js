$(document).ready(function () {
  // Slick
  $(".your-class").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    margin: 0,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  AOS.init();

  // SlickNav
  $(function () {
    $("#menu").slicknav();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      if ($(window).width() > 0) {
        $("body").addClass("sticky");
      }
    } else {
      $("body").removeClass("sticky");
    }
  });

// Scroll Top Button

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

  // OwlCarousel
  $(".sec-2-slide").owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      576: {
        items: 1,
        loop: true,
      },
      768: {
        items: 2,
        loop: true,
      },
      992: {
        items: 2,
        loop: true,
      },
      1200: {
        items: 2,
        loop: true,
      },
      1499: {
        items: 3,
        loop: true,
      },
    },
  });

  $(".owl-carousel-2").owlCarousel({
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      576: {
        items: 1,
        loop: true,
      },
      768: {
        items: 1,
        loop: true,
      },
      992: {
        items: 1,
        loop: true,
      },
      1200: {
        items: 1,
        loop: true,
      },
      1499: {
        items: 1,
        loop: true,
      },
    },
  });
});

let btn = document.querySelector(".play-vid");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let video = document.querySelector("video");
btn.onclick = function () {
  btn.classList.add("active");
  clip.classList.add("active");
  video.play();
  video.currentTime = 0;
};
close.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};

// SlowScroll

jQuery('a[href^="#"]').on("click", function (t) {
  var e = $($(this).attr("href"));
  e.length &&
    (t.preventDefault(),
    $("html, body").animate(
      {
        scrollTop: e.offset().top,
      },
      1000
    ));
});

// Circle Cursor

const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});



