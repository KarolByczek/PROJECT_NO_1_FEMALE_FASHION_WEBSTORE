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

const openRegisterFunction = () => {
  $backDrop.classList.add("active");
  $registerForm.classList.add("active");
};
setTimeout(() => openRegisterFunction(), 5000);

//for mobiles

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
    img1: "caro-tights.jpg",
    img2: "...",
    dcr: "Out of the ashes of routine and blandness comes the greatly refreshing but still simple design. A perfect addition to your wardrobe dedicated for smart business outfits."
  },
  {
    img1: "fishnet-tights.jpg",
    img2: "...",
    dcr: "This classic and outragously feminine hat, carries plenty of eye-catching features with its frivolity and outline finesse. Coming in three distinct variants in regards to color."
  },
  {
    img1: "lavuasier_stock_002a.jpg",
    img2: "lavuasier_stock_002b.jpg",
    dcr: "Orientally stylish, this kimono dress is the most beloved design in the Lavuasier's newest array of evening attire. Brightly colored, yet moderately unassuming, it makes an excellent choice for a fancy party."
  },
  {
    img1: "primero_stock_001a.jpg",
    img2: "primero_stock_001b.jpg",
    dcr: "May we present to you the latest pride of the Primero brand. In its simplicity you will also find abundance of style, grace and sexiness. It will definitely satisfy tastes of modest ladies as well as those with flirtatious tricks in mind."
  },
  {
    img1: "macinta_stock_001a.jpg",
    img2: "macinta_stock_001b.jpg",
    dcr: "Tired of plain darkness ruling your business costume department? This modern otulook on the subject will keep your appearance at work uot of the boundaries of triviality while remaining within the zone of respectfulness and appropriate status."
  },
  {
    img1: "macinta_stock_002a.jpg",
    img2: "macinta_stock_002b.jpg",
    dcr: "Lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum Lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Niniejsza strona korzysta z plików cookie. Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby oferować funkcje społecznościowe i analizować ruch w naszej witrynie. Informacje o tym, jak korzystasz z naszej witryny, udostępniamy partnerom społecznościowym, reklamowym i analitycznym. Partnerzy mogą połączyć te informacje z innymi danymi otrzymanymi od Ciebie lub uzyskanymi podczas korzystania z ich usług.",
  }
];

const $products = document.getElementById("product_container");

BuenaVistaHosieryCollection.forEach((product) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
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

  mainblock.appendChild(pictures);
  mainblock.appendChild(description);
  pictures.appendChild(image1);
  pictures.appendChild(image2);

  $products.appendChild(mainblock);
});
