const nav = document.querySelector(".nav_link")
const burger = document.querySelector(".burger")

function burgerActive(){
    nav.classList.toggle("burger_active")
}

burger.addEventListener(("click") , burgerActive)