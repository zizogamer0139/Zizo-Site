const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("zizo-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    if (isLight) {
        themeButton.textContent = "☀️";
        localStorage.setItem("zizo-theme", "light");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("zizo-theme", "dark");
    }
});


/* Small reveal animation */

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.1
    }
);

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(15px)";
    card.style.transition =
        "opacity 0.5s ease, transform 0.5s ease, background 0.2s, border-color 0.2s";

    observer.observe(card);
});
