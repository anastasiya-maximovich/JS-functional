function slideView(slideActive = 0){
    const sliders = document.querySelectorAll(".slide");

sliders[slideActive].classList.add("active");

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
}

slideView();