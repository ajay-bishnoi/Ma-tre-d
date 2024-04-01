"use strict";
function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

// preLoader//
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    }, 1000);
  });
});

function navWorking() {
  if (window.innerWidth <= 992) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}
//
$(".slider_Responsive").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
      },
    },
  ],
});
//
const orangeBtn = document.querySelector(".turnBtn");
orangeBtn.addEventListener("click", function () {
  orangeBtn.classList.toggle("justify-content-end");
});
//
const changeImages = document.querySelectorAll(".priceContent .d-flex ");

changeImages.forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    const currentSrc = image.getAttribute("src");
    if (currentSrc.includes("cross.svg")) {
      image.setAttribute("src", "./assets/img/svg/tick.svg");
    } else {
      image.setAttribute("src", "./assets/img/svg/cross.svg");
    }
  });
});
// back to top button //
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth < 992 && window.scrollY > 1050) {
    mybutton.setAttribute("style", "display: flex;");
  } else if (window.innerWidth >= 992 && window.scrollY > 400) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});
