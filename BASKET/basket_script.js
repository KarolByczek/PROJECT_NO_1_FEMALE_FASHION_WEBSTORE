
const $logButton = document.querySelector("#login_button");
const $logStrip = document.querySelector("#login_strip");
const $hideLoginStrip = document.querySelector("#hide_login_strip");
const $addSpace = document.querySelector("#add_space");
const $closeAdd = document.querySelector("#add_closer");
const $section = document.querySelector("section");

$logButton.addEventListener("click", () => {
  $logStrip.classList.toggle("active");
  if(window.innerWidth < 625 && $section.style.marginTop !== "10rem") {
    $section.style.marginTop = "10rem";
  }
  else if (window.innerWidth < 625 && $section.style.marginTop === "10rem") {
    $section.style.marginTop = "-1rem"
  }
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
const timeout01 = setTimeout(() => openRegisterFunction(), 5000);
// if (the user has logged in or registered) {clearTimeout(timeout)};

const openAddSpace = () => {
  $addSpace.classList.add("active");
};
const timeout02 = setTimeout(() => openAddSpace(), 8000);

$closeAdd.addEventListener("click", () => {
  $addSpace.classList.remove("active");
})

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


const $itemPrice1 = document.querySelector("#unit_price1" );
const $itemPrice2 = document.querySelector("#unit_price2" );
const $itemPrice3 = document.querySelector("#unit_price3" );
const $amount1 = document.querySelector("#amount1");
const $amount2 = document.querySelector("#amount2");
const $amount3 = document.querySelector("#amount3");
const $calcTotal = document.querySelector("#calc_total");
const $tp = document.querySelector("#t_p");

console.log($itemPrice1.value.slice(0,3));



$tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;

$amount1.addEventListener("input", () => {
    $tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;
});

$amount2.addEventListener("input", () => {
    $tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;
});

$amount3.addEventListener("input", () => {
    $tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;
})

