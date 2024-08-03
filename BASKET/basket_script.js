
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
const $sumAmount1 = document.querySelector("#sum_amount1");
const $sumAmount2 = document.querySelector("#sum_amount2");
const $sumAmount3 = document.querySelector("#sum_amount3");
const $paymentOption1 = document.querySelector("#payment-option1");
const $paymentOption2 = document.querySelector("#payment-option2");
const $paymentOption3 = document.querySelector("#payment-option3");
const $paymentOption4 = document.querySelector("#payment-option4");
const $paymentSum = document.querySelector("#payment");
const $deliveryOption1 = document.querySelector("#delivery-option1");
const $deliveryOption2 = document.querySelector("#delivery-option2");
const $deliveryOption3 = document.querySelector("#delivery-option3");
const $deliveryOption4 = document.querySelector("#delivery-option4");
const $deliverySum = document.querySelector("#delivery");

$sumAmount1.innerHTML = $amount1.value;
$sumAmount2.innerHTML = $amount2.value;
$sumAmount3.innerHTML = $amount3.value;

$tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;

$amount1.addEventListener("input", () => {
    $tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;
    $sumAmount1.innerHTML = $amount1.value;
});

$amount2.addEventListener("input", () => {
    $tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;
    $sumAmount2.innerHTML = $amount2.value;
});

$amount3.addEventListener("input", () => {
    $tp.innerHTML = `${$itemPrice1.value.slice(0,3)*$amount1.value + $itemPrice2.value.slice(0,2)*$amount2.value + $itemPrice3.value.slice(0,3)*$amount3.value}`;
    $sumAmount3.innerHTML = $amount3.value;
});

$paymentOption1.addEventListener("click", () => {
  $paymentSum.innerHTML = " Payment Option no1"
});

$paymentOption2.addEventListener("click", () => {
  $paymentSum.innerHTML = " Payment Option no2"
});

$paymentOption3.addEventListener("click", () => {
  $paymentSum.innerHTML = " Payment Option no3"
});

$paymentOption4.addEventListener("click", () => {
  $paymentSum.innerHTML = " Payment Option no4"
});


$deliveryOption1.addEventListener("click", () => {
  $deliverySum.innerHTML = " Delivery Option no1"
});

$deliveryOption2.addEventListener("click", () => {
  $deliverySum.innerHTML = " Delivery Option no2"
});

$deliveryOption3.addEventListener("click", () => {
  $deliverySum.innerHTML = " Delivery Option no3"
});

$deliveryOption4.addEventListener("click", () => {
  $deliverySum.innerHTML = " Delivery Option no4"
});
