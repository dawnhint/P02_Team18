// // Get saved data from sessionStorage
// let data = sessionStorage.getItem("key");

// // Remove saved data from sessionStorage
// sessionStorage.removeItem("key");

// // Remove all saved data from sessionStorage
// sessionStorage.clear();

var productList = [
    {
        name:'Cucumber Lemon Refresher',
        price: 7.04
    },
    {
        name:'Ginger Ginseng Chamomile',
        price: 7.75
    },
    {
        name:'Cream Earl Grey Moonlight',
        price: 9.15
    },
    {
        name:'Guarana Energizer Chai',
        price: 7.3
    },
    {
        name:'Tencha Mimoto Japanese',
        price: 19.72
    },
    {
        name:'Tart Cherry Turmeric',
        price: 9.15
    },
    {
        name:'Kukicha Kabuse',
        price: 9.86
    },
    {
        name:'Green Vitality',
        price: 8.45
    },
]


var itemsContainer = document.getElementById("checkout-items");
var subtotalNum = 0;

var emptyCart = true;

// add items in shopping cart
for(let i=0; i<productList.length; i++) {
    var productName = productList[i].name;
    var price = productList[i].price;
    
    // get the number of this item in sessionStorage
    let data = sessionStorage.getItem(productName);

    if(data !== null) {
        emptyCart = false;

        // create item line
        var item = document.createElement('div');
        item.className = 'checkout-item';

        // create itemName span
        var itemName = document.createElement('span');
        itemName.className = 'checkout-item-name';
        itemName.innerText = productName;

        // create price span
        var itemPrice = document.createElement('span');
        itemPrice.className = 'checkout-item-price';
        itemPrice.innerText = '$' + price;

        // create input 
        var itemNum = document.createElement('input');
        itemNum.type = 'number';
        itemNum.valueAsNumber = data;
        itemNum.className = 'checkout-number';
        itemNum.name = productName;

        // append elements
        item.appendChild(itemName);
        item.appendChild(itemPrice);
        item.appendChild(itemNum);

        itemsContainer.appendChild(item);

        // add subtotal
        subtotalNum = subtotalNum + price*data;
        subtotalNum = Math.round(subtotalNum*100)/100;
    }

}

// change subtotal number
var subtotal = document.getElementById("subtotal");
subtotal.innerText = "$" + subtotalNum;

// change tax number
var taxNum = subtotalNum*0.05;
taxNum = Math.round(taxNum*100)/100;
var tax = document.getElementById("tax");
tax.innerText = "$" + taxNum;

// change total number
var totalNum = subtotalNum + taxNum + 11.99;
totalNum = Math.round(totalNum*100)/100;
var total = document.getElementById("total");
total.innerText = "CA$ " + totalNum;



// When the cart is empty, show the text
var empty = document.querySelector("#empty-hint");

if(emptyCart) {
    empty.classList.remove("hidden");
}

function clearCart() {
    if(sessionStorage.length>0) {
        alert("Your order has been placed.")
    }
    sessionStorage.clear();
}
