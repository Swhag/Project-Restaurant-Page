import "./styles/style.css";
import "./styles/utilities.css";
import "./pages/images";
import * as menu from "./pages/menu";
import * as home from "./pages/home";

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

let menuArray = [
  menu.teaArray,
  menu.appetizerArray,
  menu.ramenArray,
  menu.noodleArray,
];
const cardSection = document.querySelectorAll(".card-container");

document.addEventListener("DOMContentLoaded", () => {
  for (let k = 0; k < menuArray.length; k++) {
    for (let i = 0; i < menuArray[k].length; i++) {
      if (menuArray[k][i].description == undefined) {
        menuArray[k][i].description = "";
      }
      cardSection[k].insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <h3>${menuArray[k][i].title}</h3>
        <div>${menuArray[k][i].description}</div>
        <div>$${menuArray[k][i].price}</div>
        <div class="btn-container">
        <button data-price=${menuArray[k][i].price} data-title=${menuArray[k][i].title} class="btn add-btn">Add to Order</button>
        </div>
      </div>`
      );
    }
  }
});

// -----------------------------------------

let cart = {};
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
const addToCartBtn = document.querySelectorAll(".card-container");

addToCartBtn.forEach((card) =>
  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
      let price = parseInt(e.target.dataset.price);
      let title = e.target.dataset.title;
      console.log(title);

      if (title in cart) {
        cart[title].qty++;
      } else {
        let cartItem = {
          title: title,
          price: price,
          qty: 1,
        };
        cart[title] = cartItem;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart();
    }
  })
);

// -----------------------------------------

const itemList = document.querySelector(".cart-items");

function updateCart() {
  let cart = {};
  itemList.innerHTML = "";

  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));

    for (let item in cart) {
      addItemToCart(cart[item]);
    }
  }
}

function addItemToCart(cartItem) {
  itemList.insertAdjacentHTML(
    "beforeend",
    `<div class="cart-item">

    <div class="item-left">
      <div>x${cartItem.qty}</div>
     <h4>${cartItem.title}</h4>
    </div>

    <div class="item-right">
      <div>$${cartItem.price}</div>
      <p class="remove-btn">Remove<p>
    </div>
  </div>`
  );
}

updateCart();

// -----------------------------------------

const removeBtn = document.querySelectorAll(".remove-btn");

removeBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log("clicked");
  })
);
