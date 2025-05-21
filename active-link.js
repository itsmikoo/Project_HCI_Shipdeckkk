window.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav .nav-item a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const hrefPage = link.getAttribute("href").split("/").pop();
        if (hrefPage === currentPage) {
            link.classList.add("active");
        }
    });
});

const hamburger = document.querySelector(".hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
});
