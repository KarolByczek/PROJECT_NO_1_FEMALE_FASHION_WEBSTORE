const $hamburgerMenuButton = document.querySelector("#hamburger-menu-button");
const $closeMobileMenuButton = document.querySelector(
  "#close-mobile-menu-button"
);
const $navList = document.querySelector("#nav-list");
const $backdrop = document.querySelector("#backdrop");
const $productImage = document.querySelector("#product-image");
const $lightboxContainer = document.querySelector("#lightbox-container");
const $closeLightboxButton = document.querySelector("#close-lightbox-button");
const $thumbnailsContainer = document.querySelector("#thumbnails-container");

const $counter = document.querySelector("#counter");
const $counterOutput = document.querySelector("#counter-output");
const $addToCart = document.querySelector("#add-to-cart");
const $outputBadge = document.querySelector("#output-badge");

const $imageButtonPrev = document.querySelector("#image-button-prev");
const $imageButtonNext = document.querySelector("#image-button-next");

$hamburgerMenuButton.addEventListener("click", () => {
  $navList.classList.add("open");
  $backdrop.classList.add("open");
});

$closeMobileMenuButton.addEventListener("click", () => {
  $navList.classList.remove("open");
  $backdrop.classList.remove("open");
});

$productImage.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    return;
  }
  $lightboxContainer.classList.add("open");
  $backdrop.classList.add("open");
});

$closeLightboxButton.addEventListener("click", () => {
  $lightboxContainer.classList.remove("open");
  $backdrop.classList.remove("open");
});

$thumbnailsContainer.addEventListener("click", ({ target }) => {
  if (target.classList.contains("thumbnail")) {
    $productImage.src = `images/${target.id}.jpg`;
    document
      .querySelector("img.thumbnail-active")
      .classList.remove("thumbnail-active");
    target.classList.add("thumbnail-active");
  }
});

$counter.addEventListener("click", ({ target }) => {
  if (target.id === "decrement") {
    $counterOutput.innerText = $counterOutput.innerText * 1 - 1;
  } else if (target.id === "increment") {
    $counterOutput.innerText = $counterOutput.innerText * 1 + 1;
  }
});

$addToCart.addEventListener("click", () => {
  $outputBadge.innerText = $counterOutput.innerText;
  $outputBadge.setAttribute("data-value", $counterOutput.innerText);
});

$imageButtonPrev.addEventListener("click", () => {
  const prevActiveThumbnail = document.querySelector("img.thumbnail-active");
  if (prevActiveThumbnail.id !== 'caro-tights') {
    $productImage.src = prevActiveThumbnail.previousElementSibling.src.replace('-thumbnail','');
    prevActiveThumbnail.classList.remove("thumbnail-active");
    prevActiveThumbnail.previousElementSibling.classList.add(
      "thumbnail-active"
    );
  }
});

$imageButtonNext.addEventListener("click", () => {
  const prevActiveThumbnail = document.querySelector("img.thumbnail-active");
  if (prevActiveThumbnail.id !== 'purple-tights') {
    $productImage.src = prevActiveThumbnail.nextElementSibling.src.replace('-thumbnail','');
    prevActiveThumbnail.classList.remove("thumbnail-active");
    prevActiveThumbnail.nextElementSibling.classList.add("thumbnail-active");
  }
});
