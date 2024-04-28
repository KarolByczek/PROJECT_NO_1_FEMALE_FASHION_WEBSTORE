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
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/girl-pants-blous-isolated-white-background-body-language-63053941.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/girl-pants-blous-isolated-white-background-body-language-63053989.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/girl-pants-blous-isolated-white-background-body-language-63107751.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/girl-pants-blous-partial-barrier-formed-isolated-white-background-body-language-63049021.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
  },
  {
    pname: "Mistress Siluette 002",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/woman-leather-dress-knife-sexy-catsuit-holding-combat-old-fabric-ruins-33386156.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/prld3.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/fetish-woman-gun-young-leather-suit-holding-33386502.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/sexy-spy-leather-dress-standing-wall-holding-futuristic-gun-33386368.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
  },
  {
    pname: "Bella Gina 002",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/sexy-woman-catsuit-holding-handcuffs-37733588.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/sexy-woman-latex-catsuit-bite-whip-vintage-wall-44351942.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/sexy-woman-vintage-wall-handcuffs-desire-44985993.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/womam-catsuit-posing-vintage-wall-beautiful-woman-latex-high-heel-platform-boots-walls-42953586.jpg",
    ],
    dcr: "A placeholder text for further development. A placeholder text for further development. A placeholder text for further development.",
  },
  {
    pname: "Attica's Charm 001",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/yoga-pose-89768.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/yoga-pose-89773.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/yoga-pose-89986.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/LEGWEAR/images/yoga-stretch-89989.jpg",
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
