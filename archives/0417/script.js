document.addEventListener("DOMContentLoaded", () => {

	const hexData = document.getElementById("hex-data");
	const terminal = document.getElementById("terminal");
	const year = document.getElementById("year");


	/* =========================
	   YEAR
	   ========================= */

	if (year) {
		year.textContent = new Date().getFullYear();
	}


	/* =========================
	   HEX FRAGMENT
	   ========================= */

	if (hexData) {

		let clicked = false;

		hexData.addEventListener("click", () => {

			if (clicked) {
				return;
			}

			clicked = true;

			hexData.style.transition = "all 0.3s ease";
			hexData.style.opacity = "0.3";

			setTimeout(() => {

				hexData.textContent = "5A 43 2D 34 31 37";

				hexData.style.opacity = "1";

			}, 300);

		});

	}


	/* =========================
	   TERMINAL
	   ========================= */

	if (terminal) {

		const terminalLines = [
			"Integrity check: FAILED",
			"Fragment detected: TRUE",
			"Archive ID: ZC-0417"
		];

		let lineIndex = 0;

		const addTerminalLine = () => {

			if (lineIndex >= terminalLines.length) {
				return;
			}

			const line = document.createElement("div");

			line.className = "terminal-output";

			line.textContent = terminalLines[lineIndex];

			terminal.insertBefore(
				line,
				terminal.lastElementChild
			);

			lineIndex++;

			setTimeout(addTerminalLine, 900);
		};

		setTimeout(addTerminalLine, 1200);

	}


	/* =========================
	   SECRET CONSOLE MESSAGE
	   ========================= */

	console.log("%cZ CORP. ARCHIVE SYSTEM", "font-size: 18px; font-weight: bold;");
	console.log("%cArchive 0417 loaded.", "color: #ff3b3b;");
	console.log("%cSomething survived the deletion.", "color: #888;");
	console.log("%c5A 43 2D 34 31 37", "font-family: monospace;");


	/* =========================
	   RANDOM GLITCH
	   ========================= */

	const archiveId = document.querySelector(".archive-id");

	if (archiveId) {

		setInterval(() => {

			if (Math.random() > 0.94) {

				archiveId.style.transform =
					`translateX(${Math.random() * 4 - 2}px)`;

				archiveId.style.opacity =
					Math.random() > 0.5 ? "0.4" : "1";

				setTimeout(() => {

					archiveId.style.transform = "";
					archiveId.style.opacity = "";

				}, 80);
			}

		}, 1500);

	}

});