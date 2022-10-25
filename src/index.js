import "./styles/style.css";
import "./styles/utilities.css";
import "./styles/lightbox.min.css";
import "./images";
// import "./lightbox.min";

// function component() {
//   const container = document.createElement("div");

//   container.innerHTML = "";
//   container.classList.add("container");

//   return container;
// }

// document.body.appendChild(component());

// ---------------------------------------

const heroImage = document.querySelector(".hero");

function switchImage() {
  if (heroImage.classList.contains("img1")) {
    heroImage.classList.remove("img1");
    heroImage.classList.add("img2");
    return;
  }

  if (heroImage.classList.contains("img2")) {
    heroImage.classList.remove("img2");
    heroImage.classList.add("img3");
    return;
  }
  if (heroImage.classList.contains("img3")) {
    heroImage.classList.remove("img3");
    heroImage.classList.add("img1");
    return;
  }
}

setInterval(() => {
  switchImage();
}, 5000);
