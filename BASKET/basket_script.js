

const $itemPrice1 = document.querySelector("#unit_price1" );
const $itemPrice2 = document.querySelector("#unit_price2" );
const $itemPrice3 = document.querySelector("#unit_price3" );
const $amount1 = document.querySelector("#amount1");
const $amount2 = document.querySelector("#amount2");
const $amount3 = document.querySelector("#amount3");
const $calcTotal = document.querySelector("#calc_total");
const $tp = document.querySelector("#t_p");

const chosenItemsCollection = [
    {
        pname:"product name one",
        price: 24,
        image_source: "./images/istockphoto-836261960-1024x1024.jpg"
    },
    {
        pname:"product name two",
        price: 45,
        image_source:"./images/mistress-siluette-002c.jpg"
    },
    {
        pname:"product name three",
        price: 120,
        image_source: "./images/woman-briefcase-18790801.jpg"
    }
]



$amount1.addEventListener("keydown", () => {
    $tp.innerHTML = `${$itemPrice1.value*$amount1.value + $itemPrice2.value*$amount2.value + $itemPrice3.value*$amount3.value}`;
})

