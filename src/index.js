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

function activateTabs() {
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
}

// Menu data -------------------------------

let menuArray = [
  menu.teaArray,
  menu.appetizerArray,
  menu.ramenArray,
  menu.noodleArray,
];

document.addEventListener("DOMContentLoaded", () => {
  const cardSection = document.querySelectorAll(".card-container");
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
        <button data-price="${menuArray[k][i].price}" data-title="${menuArray[k][i].title}" class="btn add-btn">Add to Order</button>
        </div>
      </div>`
      );
    }
  }
  activateTabs();
  updateCart();
  updateCheckout();
});

// -----------------------------------------

function getCart() {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  return cart;
}

// -----------------------------------------

function addToCart(e) {
  const cart = getCart();

  let price = parseFloat(e.target.dataset.price).toFixed(2);
  let title = e.target.dataset.title;
  let item = cart.find((item) => item.title === title);

  console.log(price);
  if (item) {
    item.qty++;
  } else {
    cart.push({
      title: title,
      price: price,
      qty: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// -----------------------------------------

function deleteItem(itemName) {
  const cart = getCart();

  cart.forEach((item, index) => {
    if (item.title === itemName) {
      cart.splice(index, 1);
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));
}

// -----------------------------------------

function updateCart() {
  const cart = getCart();
  const itemList = document.querySelector(".cart-items");
  itemList.innerHTML = "";

  for (let item in cart) {
    itemList.insertAdjacentHTML(
      "beforeend",
      `<div class="cart-item">

      <div class="item-left">
        <div>x${cart[item].qty}</div>
       <h4>${cart[item].title}</h4>
      </div>

      <div class="item-right">
        <div>$${cart[item].price}</div>
        <button class="remove-btn">Remove</button>
      </div>
    </div>`
    );
  }
}

// -----------------------------------------

function updateCheckout() {
  const cart = getCart();

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }

  const checkoutBtn = document.querySelector(".checkout-btn");
  checkoutBtn.innerHTML = `<i class="fa fa-utensils"></i>
   Checkout • $${parseFloat(total).toFixed(2)}`;
}

// -----------------------------------------

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    addToCart(e);
  }

  if (e.target.classList.contains("remove-btn")) {
    let itemName =
      e.target.parentElement.previousElementSibling.lastElementChild.innerHTML;
    deleteItem(itemName);
  }
  updateCart();
  updateCheckout();
});

// -----------------------------------------
