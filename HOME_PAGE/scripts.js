/* A non-css approach to exposition of submenus in the navigation list:

const $menunav = document.querySelector(".home_navigation");
const $submenus = document.querySelectorAll(".submenu");


$menunav.addEventListener("mouseover", ({ target }) => {
    if (target.classList.contains("menu_items")) {
      target.children[0].style.visibility = "visible";
      target.children[0].style.opacity = "1";
    }
  });

  $menunav.addEventListener("mouseout", ({ target }) => {
    if (target.classList.contains("menu_items")) {
      target.children[0].style.visibility = "hidden";
      target.children[0].style.opacity = "0";
    }
  });

  $submenus.forEach(submenu => {submenu.addEventListener("mouseover", () => {
      submenu.style.visibility = "visible";
      submenu.style.opacity = "1";
    }
  )});

  $submenus.forEach(submenu => {submenu.addEventListener("mouseout", () => {
    submenu.style.visibility = "hidden";
    submenu.style.opacity = "0";
  }
)});
*/

const $logButton = document.querySelector("#login_button");
const $logStrip = document.querySelector("#login_strip");

$logButton.addEventListener("click", () => {
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

const bestsellerCollection = [
  {
    img1: "dolcegabana_stock_001a.jpg",
    img2: "dolcegabana_stock_001b.jpg",
    dcr: "Tired of plain darkness ruling your business costume department? This modern otulook on the subject will keep your appearance at work uot of the boundaries of triviality while remaining within the zone of respectfulness and appropriate status.",
  },
  {
    img1: "jeanpaulgotier_stock_001a.jpg",
    img2: "jeanpaulgotier_stock_001b.jpg",
    dcr: "Out of the ashes of routine and blandness comes the greatly refreshing but still simple design. A perfect addition to your wardrobe dedicated for smart business outfits.",
  },
  {
    img1: "matsuda_stock_001a.webp",
    img2: "matsuda_stock_001b.webp",
    dcr: "This classic and outragously feminine hat, carries plenty of eye-catching features with its frivolity and outline finesse. Coming in three distinct variants in regards to color.",
  },
  {
    img1: "primero_stock_001a.jpg",
    img2: "primero_stock_001b.jpg",
    dcr: "May we present to you the latest pride of the Primero brand. In its simplicity you will also find abundance of style, grace and sexiness. It will definitely satisfy tastes of modest ladies as well as those with flirtatious tricks in mind.",
  },
  {
    img1: "matsuda_stock_002a.jpg",
    img2: "matsuda_stock_002b.jpg",
    dcr: "Orientally stylish, this kimono dress is the most beloved design in the Matsuda's newest array of evening attire. Brightly colored, yet moderately unassuming, it makes an excellent choice for a fancy party.",
  },
];

const $bestsellers = document.getElementById("bestseller_container");

bestsellerCollection.forEach((bestseller) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
  const image1 = document.createElement("img");
  image1.src = `images/${bestseller.img1}`;
  image1.alt = `${bestseller.img1}`;
  image1.setAttribute("class", "image1");
  const image2 = document.createElement("img");
  image2.src = `images/${bestseller.img2}`;
  image2.alt = `${bestseller.img2}`;
  image2.setAttribute("class", "image2");
  const description = document.createElement("p");
  description.innerHTML = bestseller.dcr;
  description.setAttribute("class", "description");

  const pictures = document.createElement("div");
  pictures.setAttribute("class", "pictures");

  mainblock.appendChild(pictures);
  mainblock.appendChild(description);
  pictures.appendChild(image1);
  pictures.appendChild(image2);

  $bestsellers.appendChild(mainblock);
});
