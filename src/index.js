import "./styles/style.css";
import "./styles/utilities.css";
import "./pages/images";
import * as home from "./pages/home";
import * as menu from "./pages/menu";

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

// Menu data -------------------------------
console.log(menu.ramenArray);
