const sliders = document.querySelectorAll(".slide");

for (const slide of sliders) {
    slide.addEventListener("click", () => {
        clearActiveClasses ()
        slide.classList.add("active");
    })
}

function clearActiveClasses() {
    sliders.forEach((slide) => {
        slide.classList.remove("active")
    })
}