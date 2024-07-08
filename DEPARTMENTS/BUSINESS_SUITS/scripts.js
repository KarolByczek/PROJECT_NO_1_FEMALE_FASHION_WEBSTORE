const $logButton = document.querySelector("#login_button");
const $logStrip = document.querySelector("#login_strip");
const $hideLoginStrip = document.querySelector("#hide_login_strip");
const $addSpace = document.querySelector("#add_space");
const $closeAdd = document.querySelector("#add_closer");

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

const openAddSpace = () => {
  $addSpace.classList.add("active");
};
const timeout02 = setTimeout(() => openAddSpace(), 8000);

$closeAdd.addEventListener("click", () => {
  $addSpace.classList.remove("active");
})

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
    pname: "Buena Vista 006",
    images: [
      "./images/istockphoto-834948978-1024x1024.jpg",
      "./images/istockphoto-835333170-1024x1024.jpg",
      "./images/istockphoto-835333264-1024x1024.jpg",
      "./images/istockphoto-835333320-1024x1024.jpg",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "buenavista006"
  },
  {
    pname: "Primero 004",
    images: [
      "./images/istockphoto-656599132-1024x1024.jpg",
      "./images/istockphoto-656599152-1024x1024.jpg",
      "./images/istockphoto-656599214-1024x1024.jpg",
      "./images/istockphoto-656599232-1024x1024.jpg",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "primero004"
  },
  {
    pname: "Macinta 003",
    images: [
      "./images/istockphoto-836261960-1024x1024.jpg",
      "./images/istockphoto-836262054-1024x1024.jpg",
      "./images/istockphoto-836262254-1024x1024.jpg",
      "./images/istockphoto-836287926-1024x1024.jpg",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "macinta003"
  },
  {
    pname: "Lavuuasier 008",
    images: [
      "./images/istockphoto-867395940-1024x1024.jpg",
      "./images/istockphoto-867399122-1024x1024.jpg",
      "./images/istockphoto-867399162-1024x1024.jpg",
      "./images/istockphoto-867399174-1024x1024.jpg",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "lavuasier008"
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
  imagebox1.setAttribute("class", "imagebox imagebox1");
  pictures.appendChild(imagebox1);
  const image1 = document.createElement("img");
  image1.className = 'image';
  image1.src = product.images[0];
  image1.alt = 'Some image of the product';
  imagebox1.appendChild(image1);
  const prompt1 = document.createElement("p");
  prompt1.setAttribute("class", "prompt");
  prompt1.innerHTML = "INTERACT WITH THE IMAGE IN ORDER TO ENHANCE IT";
  imagebox1.appendChild(prompt1);
  
  const imagebox2 = document.createElement("div");
  imagebox2.setAttribute("class", "imagebox imagebox2");
  pictures.appendChild(imagebox2);
  const image2 = document.createElement("img");
  image2.className = 'image';
  image2.src = product.images[1];
  image2.alt = 'Some image of the product';
  imagebox2.appendChild(image2);
  const prompt2 = document.createElement("p");
  prompt2.setAttribute("class", "prompt");
  prompt2.innerHTML = "INTERACT WITH THE IMAGE IN ORDER TO ENHANCE IT";
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
    const currentIMG1index = product.images.indexOf(".".concat(`${(image1.src).substring(48)}`));
    if (currentIMG1index < product.images.length - 2 && window.innerWidth > 800) {
      image1.src = product.images[currentIMG1index + 1];
    }
    else if (currentIMG1index < product.images.length - 1 && window.innerWidth < 800) {
      image1.src = product.images[currentIMG1index + 1];
    }
    else {
      arrowright.classList.add("disabled");
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(".".concat(`${(image1.src).substring(48)}`));
    if (currentIMG1index > 0) {
      image1.src = product.images[currentIMG1index - 1];
      arrowright.classList.remove("disabled");
    }
    else {
      arrowleft.classList.add("disabled");
    }
    
  });

  arrowright.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(".".concat(`${(image2.src).substring(48)}`));
    if (currentIMG2index < product.images.length - 1) {
      image2.src = product.images[currentIMG2index + 1];
      arrowleft.classList.remove("disabled");
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(".".concat(`${(image2.src).substring(48)}`));
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

