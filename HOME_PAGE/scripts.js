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

const openRegisterFunction = () => {
  $backDrop.classList.add("active");
  $registerForm.classList.add("active");
};
const timeout = setTimeout(() => openRegisterFunction(), 5000);
// if (the user has logged in or registered) {clearTimeout(timeout)};

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

// Temporary - static - solution for obtaining the contents of the bestsellerContainer. 

const bestsellerCollection = [
  {
    pname: "Mistress Siluette 002",
    img1: "bella-gina-001a.jpg",
    img2: "bella-gina-001d.jpg",
    dcr: "A placeholder text for description of the product. A placeholder text for description of the product. A placeholder text for description of the product.",
    urladdress: "../DEPARTMENTS/HOSIERY/index.html"
  },
  {
    pname: "Dark Hills Hat 001",
    img1: "12ffdabefdbc892d3739ea60ff64d202.jpg",
    img2: "d3a98b49679c032472d13f7a5bc39442.jpg",
    dcr: "A placeholder text for description of the product. A placeholder text for description of the product. A placeholder text for description of the product.",
    urladdress: "../DEPARTMENTS/HEADWEAR/index.html"
  },
  {
    pname: "Lavuasier Dress 002",
    img1: "girl-pants-blous-isolated-white-background-body-language-63107751.jpg",
    img2: "girl-pants-blous-partial-barrier-formed-isolated-white-background-body-language-63049021.jpg",
    dcr: "A placeholder text for description of the product. A placeholder text for description of the product. A placeholder text for description of the product.",
    urladdress: "../DEPARTMENTS/LEGWEAR/index.html"
  },
  {
    pname: "Primero Dress 001",
    img1: "istockphoto-836262254-1024x1024.jpg",
    img2: "istockphoto-836287926-1024x1024.jpg",
    dcr: "A placeholder text for description of the product. A placeholder text for description of the product. A placeholder text for description of the product.",
    urladdress: "../DEPARTMENTS/BUSINESS_SUITS/index.html"
  },
  {
    pname: "Macinta Suit 001",
    img1: "strict-young-woman-blouse-skirt-20981461.jpg",
    img2: "strict-young-woman-blouse-skirt-21391050.jpg",
    dcr: "A placeholder text for description of the product. A placeholder text for description of the product. A placeholder text for description of the product.",
    urladdress: "../DEPARTMENTS/TORSOWEAR/index.html"
  },
  {
    pname: "Macinta Dress 002",
    img1: "young-emotional-woman-pink-dress-11264435.jpg",
    img2: "young-emotional-woman-pink-dress-11264441.jpg",
    dcr: "A placeholder text for description of the product. A placeholder text for description of the product. A placeholder text for description of the product.",
    urladdress: "../DEPARTMENTS/GOWNS_AND_DRESSES/index.html"
  }
];

const $bestsellers = document.getElementById("bestseller_container");

bestsellerCollection.forEach((bestseller) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
  const productName = document.createElement("p");
  productName.setAttribute("class", "product_name");
  productName.innerHTML = bestseller.pname;
  const image1 = document.createElement("img");
  image1.src = `images/${bestseller.img1}`;
  image1.alt = `${bestseller.img1}`;
  image1.setAttribute("class", "image");
  const image2 = document.createElement("img");
  image2.src = `images/${bestseller.img2}`;
  image2.alt = `${bestseller.img2}`;
  image2.setAttribute("class", "image");
  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerHTML = bestseller.dcr;
  const alink = document.createElement("a");
  alink.setAttribute("href", bestseller.urladdress);
  alink.innerHTML = "BUY!!";

  const pictures = document.createElement("div");
  pictures.setAttribute("class", "pictures");

  mainblock.appendChild(productName);
  mainblock.appendChild(pictures);
  mainblock.appendChild(description);
  mainblock.appendChild(alink);
  pictures.appendChild(image1);
  pictures.appendChild(image2);

  $bestsellers.appendChild(mainblock);
});
