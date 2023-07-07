
filterSelection("all");

function filterSelection(tag) {
  var items;
  items = document.getElementsByClassName("product-item");
  if (tag == "all") tag = "";
  for (let i = 0; i < items.length; i++) {
    removeClass(items[i], "show");
    if (items[i].className.indexOf(tag) > -1) addClass(items[i], "show");
  }
}

// Show a filtered element
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// filter buttons
var btnContainer = document.getElementById("filter-list");
var btns = btnContainer.getElementsByClassName("btn-filter");
// Add btn-selected class to the current control button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    if(this.className.indexOf("btn-selected") > -1) {
        this.className = this.className.replace(" btn-selected", "");
        filterSelection("all");
    } else {
        var current = document.getElementsByClassName("btn-selected");
        for( let i=0; i<current.length; i++) {
            current[0].className = current[0].className.replace(" btn-selected", "");
        }
        this.className += " btn-selected";
    }
    this.blur();
  });
}