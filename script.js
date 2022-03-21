const hamburger = document.querySelector("header > nav > img")
const navList = document.querySelector("header > nav > ul")
const navListClose = navList.querySelector("img")
hamburger.addEventListener("click", () => {
	navList.style.animation = ""
	navList.classList.add("navOpen")
})
navListClose.addEventListener("click", () => {
	navList.style.animation = "fadeOut 0.5s forwards ease-in-out"
	navList.classList.remove("navOpen")
})
window.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && navList.classList.contains("navOpen")) {
		navList.style.animation = "fadeOut 0.5s forwards ease-in-out"
		navList.classList.remove("navOpen")
	}
})

// close nav modal on desktop view
const resizeObserver = new ResizeObserver((entries) => {
	for (let entry of entries) {
		if (entry.contentBoxSize) {
			const boxSize = entry.contentBoxSize[0]
			if (boxSize.inlineSize / boxSize.blockSize >= 1) {
				navList.style.animation = ""
				navList.classList.remove("navOpen")
			}
		}
	}
})

resizeObserver.observe(document.body)