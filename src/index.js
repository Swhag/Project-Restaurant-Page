import "./styles/style.css";
import "./styles/utilities.css";
import "./images";

// ---------------------------------------

const heroImage = document.querySelector(".hero");

function switchImage() {
  if (heroImage.classList.contains("img")) {
    heroImage.classList.remove("img");
    heroImage.classList.add("img1");
    return;
  }

  if (heroImage.classList.contains("img1")) {
    heroImage.classList.remove("img1");
    heroImage.classList.add("img2");
    return;
  }
  if (heroImage.classList.contains("img2")) {
    heroImage.classList.remove("img2");
    heroImage.classList.add("img");
    return;
  }
}

setInterval(() => {
  switchImage();
}, 5000);

// JQuery navbar & scrolling -------------------------

const navbar = document.querySelector("#navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$(".navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      400
    );
  }
});

// image slides -------------------------------

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Menu tabs -------------------------------

(function activateTabs() {
  const tabs = document.querySelectorAll(".tab-button");
  const tabsContent = document.querySelectorAll(".tab-content");

  tabs.forEach((a) =>
    a.addEventListener("mousedown", () => displayTabContent(a))
  );

  function displayTabContent(a) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("orange");
      tabsContent[i].classList.remove("show");
      if (tabs[i] == a) {
        tabs[i].classList.add("orange");
        tabsContent[i].classList.add("show");
      }
    }
  }
})();
