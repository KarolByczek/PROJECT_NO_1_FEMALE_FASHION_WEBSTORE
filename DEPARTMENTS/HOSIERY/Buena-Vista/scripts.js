const $logButton = document.querySelector("#login_button");
const $logStrip = document.querySelector("#login_strip");
const $hideLoginStrip = document.querySelector("#hide_login_strip");

$logButton.addEventListener("click", () => {
  $logStrip.classList.toggle("active");
});

$hideLoginStrip.addEventListener("click", () => {
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
        other_menuitem.classList.remove("active");
      }
    });
  });
});

// Temporary - static - solution for fetching contents of the products container.

const BuenaVistaHosieryCollection = [
  {
    pname: "Bella Gina 001",
    images: [
      "images/bella-gina-001a.jpg",
      "images/bella-gina-001b.jpg",
      "images/bella-gina-001c.jpg",
      "images/bella-gina-001d.jpg",
    ],
    dcr: "A bitter-sweet combination of darkness and a wind of youthfullness, these will most definitely cath an eye of a common style appreciator.",
  },
  {
    pname: "Mistress Siluette 002",
    images: [
      "images/mistress-siluette-002a.jpg",
      "images/mistress-siluette-002b.jpg",
      "images/mistress-siluette-002c.jpg",
      "images/mistress-siluette-002d.jpg",
    ],
    dcr: "Extravagantly intricate and romantic in nature, yet incredibly well accompanied by a simple casual outfit, this pattern fits almost every situation.",
  },
  {
    pname: "",
    images: [

    ],
    dcr: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
  },
];

const $products = document.getElementById("product_container");

BuenaVistaHosieryCollection.forEach((product) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
  const productName = document.createElement("p");
  productName.setAttribute("class", "product_name");
  productName.innerHTML = product.pname;
  const pictures = document.createElement("div");
  pictures.setAttribute("class", "pictures");

  const imagebox1 = document.createElement("img");
  imagebox1.src = `./${product.images[0]}`;
  imagebox1.alt = `./${product.images[0]}`;
  imagebox1.className = "image";
  pictures.appendChild(imagebox1);

  const imagebox2 = document.createElement("img");
  imagebox2.src = `./${product.images[1]}`;
  imagebox2.alt = `./${product.images[1]}`;
  imagebox2.className = "image";
  pictures.appendChild(imagebox2);

  const description = document.createElement("p");
  description.innerHTML = product.dcr;
  description.setAttribute("class", "description");

  const arrowleft = document.createElement("img");
  arrowleft.src = "../../../Common imagery/icons/arrow_left.png";
  arrowleft.setAttribute("class", "arrow_left", "arrow");
  const arrowright = document.createElement("img");
  arrowright.src = "../../../Common imagery/icons/arrow_right.png";
  arrowright.setAttribute("class", "arrow_right");

  mainblock.appendChild(productName);
  mainblock.appendChild(pictures);
  mainblock.appendChild(arrowleft);
  mainblock.appendChild(arrowright);
  mainblock.appendChild(description);

  $products.appendChild(mainblock);

  arrowright.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(
      imagebox1.src.substring(54)
    );
    if (currentIMG1index < product.images.length - 2) {
      imagebox1.src = product.images[currentIMG1index + 1];
    }
  });

  arrowright.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(
      imagebox2.src.substring(54)
    );
    if (currentIMG1index < product.images.length - 1) {
      imagebox2.src = product.images[currentIMG1index + 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(
      imagebox1.src.substring(54)
    );
    if (currentIMG1index > 0) {
      imagebox1.src = product.images[currentIMG1index - 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(
      imagebox2.src.substring(54)
    );
    if (currentIMG1index > 1) {
      imagebox2.src = product.images[currentIMG1index - 1];
    }
  });
});
