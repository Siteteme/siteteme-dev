const navbarSide = document.querySelector(".navbar-side");
const HamburgerMenu = document.querySelector(".menu-hamburger");
const closeMenu = document.querySelector(".icon-close")
const subMenu = document.querySelector("#submenu");
const itemLi = document.querySelectorAll(".item-li")

const searchBarDiv = document.querySelector(".search-bar");
const searchBarImg = document.querySelector(".search-bar img");


// Functions
function showMenu() {
    HamburgerMenu.addEventListener("click", () => {
        navbarSide.classList.add("active")

    })

}

function closeMenuIcon() {
    closeMenu.addEventListener("click", () => {
        navbarSide.classList.remove("active");

    })
}


function showSearchBar() {
    searchBarImg.addEventListener("click", () => {
        return searchBarDiv.classList.contains("active") ? searchBarDiv.classList.remove("active") : searchBarDiv.classList.add("active")
    })
}


// eventListener
itemLi.forEach((item) => {

    item.addEventListener("click", (e) => {
        e.preventDefault()
        subMenu.classList.toggle("active-submenu")

    })

})


const closeCounseling = document.querySelector("#close-counseling");

const counseling = document.querySelector(".counseling");

const btnCounseling = document.querySelector("#counseling-btn");


function showCounseling() {
    btnCounseling.addEventListener("click", (e) => {
        counseling.classList.toggle("active-counseling")
    })

}

function ClosCounseling() {
    closeCounseling.addEventListener("click", () => {
        counseling.classList.remove("active-counseling");

    })
}


//
// let userName = document.forms["form-counseling"]["name"].value
// let lastName = document.forms["form-counseling"]["lastname"].value
// let phone = document.forms["form-counseling"]["phone"].value
// let email = document.forms["form-counseling"]["email"].value
//
