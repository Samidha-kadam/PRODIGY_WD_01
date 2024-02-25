//Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
} 

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation(){
    //Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        //Reset variables
        declare();
        events();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const nav_links = document.querySelectorAll(".links a");
    const get_started_btn = document.querySelector(".cta .btn");

    hamburger_menu.addEventListener("click", () => {
        document.querySelector(".big-wrapper").classList.toggle("active");
    });

    nav_links.forEach((link) => {
        link.addEventListener("click", () => {
            document.querySelector(".big-wrapper").classList.remove("active");
        });
    });

    get_started_btn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "get_started.html"; // Navigate to get_started.html
    });
});

function events(){
    toggle_btn.addEventListener('click', toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events();