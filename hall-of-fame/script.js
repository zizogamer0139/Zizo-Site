document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       THEME
       ========================= */

    const themeToggle =
        document.getElementById("theme-toggle");

    const savedTheme =
        localStorage.getItem("zcorp-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    function updateThemeIcon() {
        if (!themeToggle) return;

        themeToggle.textContent =
            document.body.classList.contains("light-theme")
                ? "☀"
                : "☾";
    }

    updateThemeIcon();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            const theme =
                document.body.classList.contains("light-theme")
                    ? "light"
                    : "dark";

            localStorage.setItem(
                "zcorp-theme",
                theme
            );

            updateThemeIcon();
        });
    }

    /* =========================
       SCROLL REVEALS
       ========================= */

    const revealElements =
        document.querySelectorAll(
            ".hall-empty, .hall-rule, .classified-box, .hall-symbol"
        );

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "reveal",
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                });
            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(
        (element, index) => {
            element.style.transitionDelay =
                `${index * 70}ms`;

            revealObserver.observe(element);
        }
    );

    /* =========================
       SMOOTH LINKS
       ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {
            link.addEventListener(
                "click",
                (event) => {
                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            );
        });

    /* =========================
       CARD HOVER
       ========================= */

    document
        .querySelectorAll(".hall-rule")
        .forEach((card) => {
            card.addEventListener(
                "mouseenter",
                () => {
                    card.style.transform =
                        "translateY(-5px)";
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    card.style.transform = "";
                }
            );
        });

    /* =========================
       CURRENT YEAR
       ========================= */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

    /* =========================
       Z CORP CONSOLE
       ========================= */

    console.log(
        "%cZ CORP.",
        "font-size: 24px; font-weight: 800;"
    );

    console.log(
        "%cHALL OF FAME",
        "font-size: 14px; font-weight: 700;"
    );

    console.log(
        "%cThe archive is waiting.",
        "font-size: 12px;"
    );
});