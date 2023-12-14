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

const $register = document.querySelector("#register");
const $backDrop = document.querySelector(".backdrop");

$register.addEventListener("click", () => {
  event.preventDefault();
  $backDrop.classList.add("active");
});

const bestsellerCollection = [
  {
    img1: "dolcegabana_stock_001a.jpg",
    img2: "dolcegabana_stock_001b.jpg",
    dcr: "Description of a product...",
  },
  {
    img1: "jeanpaulgotier_stock_001a.jpg",
    img2: "jeanpaulgotier_stock_001b.jpg",
    dcr: "Another description of a product...",
  },
  {
    img1: "matsuda_stock_001a.webp",
    img2: "matsuda_stock_001b.webp",
    dcr: "Yet another description of a product...",
  },
  {
    img1: "primero_stock_001a.jpg",
    img2: "primero_stock_001b.jpg",
    dcr: "This time it is an actual description. May we present to you the latest pride of the Primero brand. In its simplicity you will also find abundance of style, grace and sexiness. It will definitely satisfy tastes of modest ladies as well as those with flirtatious tricks in mind.",
  },
  {
    img1: "matsuda_stock_002a.jpg",
    img2: "matsuda_stock_002b.jpg",
    dcr: "May we present to you the latest pride of the Matsuda brand. In its simplicity you will also find abundance of style, grace and sexiness. It will definitely satisfy tastes of modest ladies as well as those with flirtatious tricks in mind.",
  },
];

const $bestsellers = document.getElementById("bestseller_container");

bestsellerCollection.forEach((bestseller) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("id", "mainblock");
  const image1 = document.createElement("img");
  image1.src = `images/${bestseller.img1}`;
  image1.setAttribute("id", "image1");
  const image2 = document.createElement("img");
  image2.src = `images/${bestseller.img2}`;
  image2.setAttribute("id", "image2");
  const description = document.createElement("p");
  description.innerHTML = bestseller.dcr;
  description.setAttribute("id", "description");

  const pictures = document.createElement("div");
  pictures.setAttribute("id", "pictures");

  mainblock.appendChild(pictures);
  mainblock.appendChild(description);
  pictures.appendChild(image1);
  pictures.appendChild(image2);

  $bestsellers.appendChild(mainblock);
});
