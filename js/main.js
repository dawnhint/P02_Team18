var navToggle = document.querySelector("#nav-toggle");
var navItems  = document.querySelector("#nav-items");

if(window.innerWidth<700) {
    navToggle.classList.remove("hidden");
} else {
    navItems.classList.remove("hidden");
}

window.addEventListener("resize", ()=>{
    
    var width = window.innerWidth;
    
    if(width < 700) {
        // show toggle
        navToggle.classList.remove("hidden");
        navToggle.setAttribute("aria-hidden",false);
        // hide nav items
        navItems.classList.add("hidden"); 
        navItems.setAttribute("aria-hidden",true);
    } else {
        // hide toggle
        navToggle.classList.add("hidden");
        navToggle.setAttribute("aria-hidden",true);
        // show nav items
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden",false);
    }
})

// show navigation when clicking the toggle
navToggle.addEventListener("click", ()=> {
    if(navItems.classList.contains("hidden")) {
        navItems.classList.remove("hidden");
    } else {
        navItems.classList.add("hidden");
    }
})

// search bar
var searchIcon  = document.querySelector("#search-icon");
var searchBar = document.querySelector("#search-bar");

// show search bar 
searchIcon.addEventListener("click", ()=> {
    if(searchBar.classList.contains("hidden")) {
        console.log("show search bar");
        searchBar.classList.remove("hidden");
    } else {
        console.log("hide search bar");
        searchBar.classList.add("hidden");
    }
})

