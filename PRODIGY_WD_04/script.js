document.addEventListener("DOMContentLoaded", function () {
    // Ensure the navbar is always visible
    const header = document.querySelector("header");
    header.style.position = "fixed";  // Fix the navbar at the top
    header.style.width = "100%";
    header.style.top = "0";
    header.style.left = "0";
    header.style.zIndex = "1000";
    header.style.background = "#343a40"; // Ensures visibility when scrolling

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });
});
