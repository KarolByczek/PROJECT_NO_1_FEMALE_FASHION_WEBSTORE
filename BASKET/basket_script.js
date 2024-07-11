

const $item1 = document.querySelector("#item-option1" );
const $item2 = document.querySelector("#item-option2" );
const $item3 = document.querySelector("#item-option3" );
const $itemPicture = document.querySelector("#item_picture");
const $unitPrice = document.querySelector("#unit_price");
const $amount = document.querySelector("#amount");

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

$item1.addEventListener("click", () => {
        $itemPicture.src = chosenItemsCollection[0].image_source;
        $unitPrice.value = chosenItemsCollection[0].price;
        $amount.value = 1;
    })

$item2.addEventListener("click", () => {
        $itemPicture.src = chosenItemsCollection[1].image_source;
        $unitPrice.value = chosenItemsCollection[1].price;
        $amount.value = 1;
    })

$item3.addEventListener("click", () => {
        $itemPicture.src = chosenItemsCollection[2].image_source;
        $unitPrice.value = chosenItemsCollection[2].price;
        $amount.value = 1;
    })
