// ==========================================
// Z CORP — INCIDENT Z-17
// ==========================================


// YEAR
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==========================================
// RECOVERED TERMINAL
// ==========================================

const terminal = document.getElementById("terminal");

const terminalLines = [
    "[02:17:43] unauthorized access detected",
    "[02:17:44] archive security protocol initiated",
    "[02:18:01] system lockdown confirmed",
    "[02:18:07] external connection: NOT FOUND",
    "[02:19:26] archive data integrity failure",
    "[02:19:29] recovery attempt initiated",
    "[02:20:41] recovery attempt failed",
    "[02:21:09] unknown process detected",
    "[02:21:10] process identifier: UNKNOWN",
    "[02:21:11] incident logger degraded",
    "[02:21:12] searching for preserved records...",
    "[02:21:13] 1 RECORD FOUND"
];


let terminalIndex = 0;


function writeTerminalLine() {

    if (!terminal || terminalIndex >= terminalLines.length) {
        return;
    }


    const line = document.createElement("div");

    line.className = "terminal-line";

    line.textContent = terminalLines[terminalIndex];

    terminal.appendChild(line);

    terminalIndex++;


    setTimeout(writeTerminalLine, 260);
}


setTimeout(writeTerminalLine, 500);


// ==========================================
// HIDDEN RECORD
// ==========================================

const classifiedBox = document.getElementById("classifiedBox");

const redactedRows = document.querySelectorAll(".redacted");


redactedRows.forEach((row) => {

    row.addEventListener("click", (event) => {

        event.stopPropagation();


        const value = row.dataset.value;

        const valueElement = row.querySelector(".redacted-value");


        if (!value || !valueElement) {
            return;
        }


        // Already revealed
        if (row.classList.contains("revealed")) {
            return;
        }


        valueElement.textContent = value;

        row.classList.add("revealed");


        console.log("[Z CORP] Classified fragment recovered:");
        console.log(value);


        // Special discovery
        if (value === "ARCHIVE-03") {

            console.log(
                "[Z CORP] LOCATION IDENTIFIED: ARCHIVE-03"
            );

        }

    });

});


// ==========================================
// CLASSIFIED BOX
// ==========================================

if (classifiedBox) {

    classifiedBox.addEventListener("click", () => {

        classifiedBox.classList.toggle("selected");

        console.log(
            "[Z CORP] Restricted record inspected."
        );

    });

}


// ==========================================
// SECURITY STATUS GLITCH
// ==========================================

const securityStatus = document.querySelector(".security-status");


setInterval(() => {

    if (!securityStatus) {
        return;
    }


    if (Math.random() > 0.85) {

        securityStatus.style.opacity = "0.35";


        setTimeout(() => {

            securityStatus.style.opacity = "1";

        }, 80);

    }

}, 2000);


// ==========================================
// SECRET KEYBOARD CLUE
// ==========================================

let secretInput = "";

const secretCode = "zcorp";


document.addEventListener("keydown", (event) => {

    secretInput += event.key.toLowerCase();


    if (secretInput.length > secretCode.length) {

        secretInput =
            secretInput.slice(-secretCode.length);

    }


    if (secretInput === secretCode) {

        console.log(
            "%c[Z CORP] ACCESS STRING ACCEPTED",
            "color:#6dff9b;font-weight:bold;"
        );

        console.log(
            "%cONE RECORD REMAINS.",
            "color:#ffd866;font-weight:bold;"
        );

        secretInput = "";

    }

});