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
const $backDrop = document.querySelector("#backdrop");
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

// Temporary - static - solution for obtaining the contents of the productsCollection container.

const productsCollection = [
  {
    pname: "Bella Gina 001",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/girl-yellow-dress-19027485.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/girl-yellow-dress-19100234.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/girl-yellow-dress-19187305.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/girl-yellow-dress-19425139.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
  },
  {
    pname: "Mistress Siluette 002",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/portrait-young-woman-red-gown-20046227.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/portrait-young-woman-red-gown-26903091.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-woman-red-gown-20420645.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-woman-red-gown-25847665.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
  },
  {
    pname: "Bella Gina 002",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-beautiful-woman-umbrella-11255808.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-emotional-woman-pink-dress-11264424.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-emotional-woman-pink-dress-11264435.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-emotional-woman-pink-dress-11264441.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
  },
  {
    pname: "Attica's Charm 001",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-woman-costume-50916325.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-woman-costume-50916326.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-woman-costume-50916327.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/GOWNS_AND_DRESSES/images/young-woman-costume-50916328.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
  },
];

const $products = document.getElementById("product_container");

productsCollection.forEach((product) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
  const productName = document.createElement("p");
  productName.setAttribute("class", "product_name");
  productName.innerHTML = product.pname;
  const pictures = document.createElement("div");
  pictures.setAttribute("class", "pictures");

  const imagebox1 = document.createElement("img");
  imagebox1.src = `${product.images[0]}`;
  imagebox1.alt = "some image of a product";
  imagebox1.className = "imagebox";
  pictures.appendChild(imagebox1);

  const imagebox2 = document.createElement("img");
  imagebox2.src = `${product.images[1]}`;
  imagebox2.alt = "some image of a product";
  imagebox2.className = "imagebox";
  pictures.appendChild(imagebox2);

  const description = document.createElement("p");
  description.innerHTML = product.dcr;
  description.setAttribute("class", "description");

  const arrowleft = document.createElement("img");
  arrowleft.src = "../../../Common imagery/icons/arrow_left.png";
  arrowleft.setAttribute("class", "arrow arrow_left");
  const arrowright = document.createElement("img");
  arrowright.src = "../../../Common imagery/icons/arrow_right.png";
  arrowright.setAttribute("class", "arrow arrow_right");

  mainblock.appendChild(productName);
  mainblock.appendChild(pictures);
  mainblock.appendChild(arrowleft);
  mainblock.appendChild(arrowright);
  mainblock.appendChild(description);

  $products.appendChild(mainblock);

  arrowright.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(imagebox1.src);
    if (currentIMG1index < product.images.length - 2) {
      imagebox1.src = product.images[currentIMG1index + 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(imagebox1.src);
    if (currentIMG1index > 0) {
      imagebox1.src = product.images[currentIMG1index - 1];
    }
  });

  arrowright.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(imagebox2.src);
    console.log(imagebox2.src);
    if (currentIMG2index < product.images.length - 1) {
      imagebox2.src = product.images[currentIMG2index + 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(imagebox2.src);
    if (currentIMG2index > 1) {
      imagebox2.src = product.images[currentIMG2index - 1];
    }
  });

  const imageBoxes = mainblock.querySelectorAll(".imagebox");
  const $showCase = document.createElement("img");
  $showCase.setAttribute("class", "showcase");
  mainblock.appendChild($showCase);

  imageBoxes.forEach((imagebox) => {
    imagebox.addEventListener("click", () => {
      $backDrop.classList.add("active");
      $showCase.classList.add("active");
      $showCase.src = imagebox.src;
      $showCase.alt = imagebox.src.substring(53);
      $backDrop.addEventListener("click", () => {
        $backDrop.classList.remove("active");
        $showCase.classList.remove("active");
        $showCase.classList.remove("enhanced");
      });
    });
  });

  $showCase.addEventListener("click", () => {
    if ($showCase.classList.contains("enhanced")) {
      $showCase.classList.remove("enhanced")
    } else {
      $showCase.classList.add("enhanced")
    }
  });

});
