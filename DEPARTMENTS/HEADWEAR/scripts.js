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
    pname: "Dark Hills 003",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/1cbaa5d4127baddada1f3d6a1385c84e.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/6e08cce9802d998a6e7ee7096ef40072.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/8c57bc03754f6f46357cb0aa3f45fd0c.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/96505c8acdb4d17b33428e90098729df.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
    id: "darkhills003"
  },
  {
    pname: "Buena Vista 009",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/2ed2a81d53f41d04f2eea116a47d680b.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/4c4f788cce3db309bd6e6445047c9c45.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/4873a97b6b26c687e376b5ec9cff90d2.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/b947d525c023b764693909e19b64db87.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
    id: "buenavista009"
  },
  {
    pname: "Macinta 004",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/12ffdabefdbc892d3739ea60ff64d202.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/a3b9e4c1960d39fbbc8be5d8d4c40313.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/ef975bcdd83755aa8c4dd5d4672acb29.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/d3a98b49679c032472d13f7a5bc39442.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
    id: "macinta004"
  },
  {
    pname: "Primero 001",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/668d93aa7f131b65ce08a4ea10f32a62.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/d5df0c44232798c60231e6f2f6f18922.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/dcdecd0e83e7a1e67b5e30058454c7c1.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HEADWEAR/images/f37952c3d421735fdab08a11857cfd7e.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
    id: "primero001"
  },
];

const $products = document.getElementById("product_container");

productsCollection.forEach((product) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
  mainblock.setAttribute("id", product.id);
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
