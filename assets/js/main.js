const navbarSide = document.querySelector(".navbar-side");
const HamburgerMenu = document.querySelector(".menu-hamburger");
const closeMenu = document.querySelector(".icon-close")

const subMenu = document.querySelector("#submenu");

const itemLi = document.querySelectorAll(".item-li")


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


itemLi.forEach((item) => {

    item.addEventListener("click", (e) => {
        e.preventDefault()
        subMenu.classList.toggle("active-submenu")

    })

})