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


// click small iamge to show big image
// functions for pdp 01, ginger tea
function changeImage1() {
    var image=document.getElementById('detail-image');
    image.src="./img/products/ginger-ginseng-chamomile.png";
}

function changeImage2() {
    var image=document.getElementById('detail-image');
    image.src="./img/products/pdp/ginger-packaging.jpg";
}

function changeImage3() {
    var image=document.getElementById('detail-image');
    image.src="./img/products/pdp/ginger-tea.jpg";
}
  
// functions for pdp02, moonlight tea
function changeImage4() {
    var image=document.getElementById('detail-image');
    image.src="./img/products/cream-earl-grey-moonlight.png";
}

function changeImage5() {
    var image=document.getElementById('detail-image');
    image.src="./img/products/pdp/moonlight-packaging.jpg";
}

function changeImage6() {
    var image=document.getElementById('detail-image');
    image.src="./img/products/pdp/moonlight-pack.jpg";
}