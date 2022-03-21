const hamburger = document.querySelector("header > nav > img")
const navList = document.querySelector("header > nav > ul")
hamburger.addEventListener("click", () => {
	navList.classList.toggle("navOpen")
})
window.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && navList.classList.contains("navOpen")) {
		navList.classList.remove("navOpen")
	}
})
