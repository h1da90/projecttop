const secondbutton = document.getElementById("secondbutton");
const firstbutton = document.getElementById("firstbutton");


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