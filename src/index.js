import "./styles/style.css";
import "./styles/utilities.css";
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

// ---------------------------------------

const navbar = document.getElementById("navbar");
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
$("#navbar a, .btn").on("click", function (e) {
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
