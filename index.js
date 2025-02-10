const secondbutton = document.getElementById("secondbutton");
const firstbutton = document.getElementById("firstbutton");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");


firstbutton.addEventListener("mousemove", () => {
    secondbutton.classList.add("secondbutton")
})
firstbutton.addEventListener("mouseleave", () => {
    secondbutton.classList.remove("secondbutton")
})

secondbutton.addEventListener("mousemove", () => {
    firstbutton.classList.add("firstbutton")
})
secondbutton.addEventListener("mouseleave", () => {
    firstbutton.classList.remove("firstbutton")
})

firstbutton.addEventListener("click", () => {
    modal.style.display = "block";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});