var minus = document.querySelector("#minus-sign");
var plus  = document.querySelector("#plus-sign");
var count  = document.querySelector("#count-num");

var submit = document.querySelector("#pdp-submit")

// click minus sign -> input - 1
minus.addEventListener("click", ()=> {
    console.log("count-1");
    if(count.value>0) count.value--;
})

// click plus sign -> input + 1
plus.addEventListener("click", ()=> {
    console.log("count+1");
    count.value++;
})

// click submit -> to checkout
submit.addEventListener("click",()=>{
    window.location.href="./checkout.html";
})