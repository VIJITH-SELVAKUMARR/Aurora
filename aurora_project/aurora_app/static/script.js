// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Button hover animation
const exploreBtn = document.querySelector(".explore-btn");

exploreBtn.addEventListener("mouseover", () => {
    exploreBtn.style.transform = "scale(1.1)";
    exploreBtn.style.transition = "0.3s ease-in-out";
});

exploreBtn.addEventListener("mouseout", () => {
    exploreBtn.style.transform = "scale(1)";
});

// Fade-in effect for hero section
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.opacity = 1;
        hero.style.transition = "opacity 1.5s ease-in-out";
    }, 200);
});
