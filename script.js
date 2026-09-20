/* =========================================================
   Z CORP.
   Main Website JavaScript
   ========================================================= */


/* =========================================================
   THEME
   ========================================================= */

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("zcorp-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");

    if (themeButton) {
        themeButton.textContent = "☀️";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }
} else {
    if (themeButton) {
        themeButton.textContent = "🌙";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    }
}


if (themeButton) {
    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        if (isLight) {
            themeButton.textContent = "☀️";

            themeButton.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            localStorage.setItem(
                "zcorp-theme",
                "light"
            );

        } else {
            themeButton.textContent = "🌙";

            themeButton.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            localStorage.setItem(
                "zcorp-theme",
                "dark"
            );
        }
    });
}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".product-card, .division, .hall-content, .hall-symbol, .classified-box, .about-content, .terminal"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);
        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        `opacity 0.55s ease ${Math.min(index * 0.04, 0.25)}s,
         transform 0.55s ease ${Math.min(index * 0.04, 0.25)}s`;

    revealObserver.observe(element);
});


/* =========================================================
   REVEAL STATE
   ========================================================= */

const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);


/* =========================================================
   SMOOTH INTERNAL LINKS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

});


/* =========================================================
   PRODUCT CARD INTERACTION
   ========================================================= */

const productCards =
    document.querySelectorAll(".product-card");


productCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.setProperty(
            "--card-lift",
            "-7px"
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.setProperty(
            "--card-lift",
            "0px"
        );

    });

});


/* =========================================================
   TERMINAL CURSOR
   ========================================================= */

const terminalBody =
    document.querySelector(".terminal-body");


if (terminalBody) {

    const lastLine =
        terminalBody.querySelector("p:last-child");

    if (lastLine) {

        const cursor =
            document.createElement("span");

        cursor.textContent = "█";

        cursor.style.marginLeft = "4px";
        cursor.style.animation =
            "zcorpCursor 1s infinite";

        lastLine.appendChild(cursor);

    }

}


/* =========================================================
   TERMINAL CURSOR ANIMATION
   ========================================================= */

const cursorStyle =
    document.createElement("style");

cursorStyle.textContent = `
    @keyframes zcorpCursor {
        0%, 45% {
            opacity: 1;
        }

        50%, 100% {
            opacity: 0;
        }
    }
`;

document.head.appendChild(cursorStyle);


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const footerYear =
    document.querySelector(".footer-bottom span:first-child");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Z Corp. All rights reserved.`;

}


/* =========================================================
   Z CORP. STATUS
   ========================================================= */

console.log(
    "%c Z CORP. ",
    "color:#9c94ff;font-size:20px;font-weight:800;"
);

console.log(
    "%c Systems operational.",
    "color:#69e6a0;font-size:13px;"
);

console.log(
    "%c If you found something you weren't supposed to find...",
    "color:#9ca4b8;font-size:12px;"
);

console.log(
    "%c ...good luck.",
    "color:#9c94ff;font-size:12px;font-weight:700;"
);
