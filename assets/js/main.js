const navbarSide = document.querySelector(".navbar-side");
const HamburgerMenu = document.querySelector(".menu-hamburger");
const closeMenu = document.querySelector(".icon-close")

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