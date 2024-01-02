const $logButton = document.querySelector("#login_button");
const $logStrip = document.querySelector("#login_strip");
const $hideLoginStrip = document.querySelector("#hide_login_strip");

$logButton.addEventListener("click", () => {
  $logStrip.classList.toggle("active");
});

$hideLoginStrip.addEventListener("click", () =>{
  $logStrip.classList.toggle("active");
});

const $menuItems = document.querySelectorAll(".menu_item");
const $register = document.querySelector("#register");
const $backDrop = document.querySelector(".backdrop");
const $registerForm = document.getElementById("register_form");
const $submitRegisterform = document.getElementById("submit_register_form");
const $registerFormLoginButton = document.getElementById(
  "register_form_login_button"
);
const $closeRegisterForm = document.getElementById("close_register_form");

$register.addEventListener("click", (event) => {
  event.preventDefault();
  $backDrop.classList.add("active");
  $registerForm.classList.add("active");
});

$registerFormLoginButton.addEventListener("click", (event) => {
  event.preventDefault();
  $backDrop.classList.remove("active");
  $registerForm.classList.remove("active");
  $logStrip.classList.add("active");
  window.scrollTo(top);
});

$closeRegisterForm.addEventListener("click", () => {
  $backDrop.classList.remove("active");
  $registerForm.classList.remove("active");
});

//for definition < 625px (navigation menu) 

$menuItems.forEach((menuitem) => {
  menuitem.addEventListener("click", () => {
    menuitem.classList.toggle("active");
    $menuItems.forEach((other_menuitem) => {
      if (other_menuitem !== menuitem) {
      other_menuitem.classList.remove("active")
      };
    });
  });
});

// Temporary - static - solution for fetching contents of the products container. 

const BuenaVistaHosieryCollection = [
  {
    pname: "Caro Tights 003",
    img1: "caro-tights.jpg",
    img2: "polka-dot-tights.jpg",
    dcr: "Out of the ashes of routine and blandness comes the greatly refreshing but still simple design. A perfect addition to your wardrobe dedicated for smart business outfits."
  },
  {
    pname: "Fishnet Tights 002",
    img1: "fishnet-tights.jpg",
    img2: "purple-tights.jpg",
    dcr: "This classic and outragously feminine hat, carries plenty of eye-catching features with its frivolity and outline finesse. Coming in three distinct variants in regards to color."
  }
];

const $products = document.getElementById("product_container");

BuenaVistaHosieryCollection.forEach((product) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
  const productName = document.createElement("p");
  productName.setAttribute("class", "product_name");
  productName.innerHTML = product.pname;
  const image1 = document.createElement("img");
  image1.src = `images/${product.img1}`;
  image1.alt = `${product.img1}`;
  image1.setAttribute("class", "image1");
  const image2 = document.createElement("img");
  image2.src = `images/${product.img2}`;
  image2.alt = `${product.img2}`;
  image2.setAttribute("class", "image2");
  const description = document.createElement("p");
  description.innerHTML = product.dcr;
  description.setAttribute("class", "description");

  const pictures = document.createElement("div");
  pictures.setAttribute("class", "pictures");

  mainblock.appendChild(productName);
  mainblock.appendChild(pictures);
  mainblock.appendChild(description);
  pictures.appendChild(image1);
  pictures.appendChild(image2);

  $products.appendChild(mainblock);
});
