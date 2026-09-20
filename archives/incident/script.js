document.addEventListener("DOMContentLoaded", () => {

	const year = document.getElementById("year");
	const terminal = document.getElementById("terminal");
	const classifiedBox = document.querySelector(".classified-box");


	/* =========================
	   YEAR
	   ========================= */

	if (year) {
		year.textContent = new Date().getFullYear();
	}


	/* =========================
	   TERMINAL EVENTS
	   ========================= */

	if (terminal) {

		const events = [
			"Checking incident log integrity...",
			"WARNING: checksum mismatch.",
			"Searching recovered fragments...",
			"1 fragment located.",
			"Fragment status: UNREADABLE."
		];

		let index = 0;

		const addEvent = () => {

			if (index >= events.length) {
				return;
			}

			const line = document.createElement("div");

			line.className = "output";

			line.textContent = events[index];

			terminal.insertBefore(
				line,
				terminal.lastElementChild
			);

			index++;

			setTimeout(addEvent, 950);
		};

		setTimeout(addEvent, 1200);
	}


	/* =========================
	   CLASSIFIED INTERACTION
	   ========================= */

	if (classifiedBox) {

		classifiedBox.addEventListener("click", () => {

			classifiedBox.classList.toggle("selected");

			if (classifiedBox.classList.contains("selected")) {

				console.log("%cZ CORP SECURITY", "font-size: 18px; font-weight: bold;");
				console.log("%cIncident Z-17 selected.", "color: #ff3838;");
				console.log("%cThere is still one recovered fragment.", "color: #888;");
				console.log("%cSearch the record carefully.", "color: #888;");

			}

		});

	}


	/* =========================
	   SECURITY CONSOLE
	   ========================= */

	console.log(
		"%cZ CORP. SECURITY CORE",
		"font-size: 18px; font-weight: 700;"
	);

	console.log(
		"%cINCIDENT Z-17",
		"color: #ff3838; font-weight: bold;"
	);

	console.log(
		"%cUnauthorized access detected.",
		"color: #888;"
	);

	console.log(
		"%cOne record remains.",
		"color: #888;"
	);


	/* =========================
	   RANDOM SYSTEM GLITCH
	   ========================= */

	const status = document.querySelector(".security-status");

	if (status) {

		setInterval(() => {

			if (Math.random() > 0.95) {

				status.style.opacity = "0.25";

				setTimeout(() => {
					status.style.opacity = "";
				}, 100);

			}

		}, 1400);

	}


	/* =========================
	   SECRET KEYBOARD EVENT
	   ========================= */

	let sequence = "";

	document.addEventListener("keydown", (event) => {

		sequence += event.key.toLowerCase();

		if (sequence.length > 12) {
			sequence = sequence.slice(-12);
		}

		if (sequence.includes("zcorp")) {

			console.log(
				"%cSECURITY OVERRIDE DETECTED",
				"color: #ff3838; font-size: 16px; font-weight: bold;"
			);

			sequence = "";
		}

	});

});