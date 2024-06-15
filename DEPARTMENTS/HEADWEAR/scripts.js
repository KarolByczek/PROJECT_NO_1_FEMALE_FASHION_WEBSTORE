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

const $showCaseCont = document.querySelector("#showcasecont");
const $showCase = document.createElement("img");
$showCase.setAttribute("class", "showcase");
$showCaseCont.appendChild($showCase);

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
  mainblock.setAttribute("id", product.id)
  const productName = document.createElement("p");
  productName.setAttribute("class", "product_name");
  productName.innerHTML = product.pname;
  const pictures = document.createElement("div");
  pictures.setAttribute("class", "pictures");

  const imagebox1 = document.createElement("div");
  imagebox1.className = "imagebox1";
  imagebox1.setAttribute('class', "imagebox");
  pictures.appendChild(imagebox1);
  const image1 = document.createElement("img");
  image1.className = 'image';
  image1.src = `${product.images[0]}`;
  image1.alt = 'Some image of the product';
  imagebox1.appendChild(image1);
  const prompt1 = document.createElement("p");
  prompt1.setAttribute("class", "prompt");
  prompt1.innerHTML = "CLICK TO ENHANCE";
  imagebox1.appendChild(prompt1);
  
  const imagebox2 = document.createElement("div");
  imagebox2.className = "imagebox2";
  imagebox2.setAttribute('class', "imagebox");
  pictures.appendChild(imagebox2);
  const image2 = document.createElement("img");
  image2.className = 'image';
  image2.src = `${product.images[1]}`;
  image2.alt = 'Some image of the product';
  imagebox2.appendChild(image2);
  const prompt2 = document.createElement("p");
  prompt2.setAttribute("class", "prompt");
  prompt2.innerHTML = "CLICK TO ENHANCE";
  imagebox2.appendChild(prompt2);

  const description = document.createElement("p");
  description.innerHTML = product.dcr;
  description.setAttribute("class", "description");

  const arrowcont = document.createElement("div");
  arrowcont.setAttribute("class", "arrowcont");

  const arrowleft = document.createElement("button");
  arrowleft.innerHTML = "PREVIOUS SLIDE";
  arrowleft.setAttribute("class", "arrow arrow_left");
  const arrowright = document.createElement("button");
  arrowright.innerHTML = "NEXT SLIDE";
  arrowright.setAttribute("class", "arrow arrow_right");

  mainblock.appendChild(productName);
  mainblock.appendChild(pictures);
  mainblock.appendChild(arrowcont);
  arrowcont.appendChild(arrowleft);
  arrowcont.appendChild(arrowright);
  mainblock.appendChild(description);

  $products.appendChild(mainblock);

  arrowright.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(image1.src);
    if (currentIMG1index < product.images.length - 2) {
      image1.src = product.images[currentIMG1index + 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(image1.src);
    if (currentIMG1index > 0) {
      image1.src = product.images[currentIMG1index - 1];
    }
  });

  arrowright.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(image2.src);
    console.log(imagebox2.src);
    if (currentIMG2index < product.images.length - 1) {
      image2.src = product.images[currentIMG2index + 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(image2.src);
    if (currentIMG2index > 1) {
      image2.src = product.images[currentIMG2index - 1];
    }
  });

 
  const imageBoxes = mainblock.querySelectorAll(".imagebox");

  imageBoxes.forEach((one) => {
    one.addEventListener("click", () => {
      $backDrop.classList.add("active");
      $showCaseCont.classList.add("active");
      $showCase.src = one.firstChild.src;
      $backDrop.addEventListener("click", () => {
        $backDrop.classList.remove("active");
        $showCaseCont.classList.remove("active");
      });
    });
    
  });


});
