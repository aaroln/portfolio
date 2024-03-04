function toggleDropdown() {
    const menu = document.querySelector(".dropdown-menu");
    const iconId = document.getElementById("hamburger");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
        document.getElementById("hamburger").innerHTML = "&#10006;";
    }
    else {
        menu.style.display = "none";
        document.getElementById("hamburger").innerHTML = "&#124;&#124;&#124;"; // Change the icon back to |||
    }
}
document.getElementById("hamburger").addEventListener("click", toggleDropdown);