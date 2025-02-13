const secondbutton = document.getElementById("secondbutton");
const firstbutton = document.getElementById("firstbutton");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");

firstbutton.addEventListener("mousemove", () => {
  secondbutton.classList.add("secondbutton");
});
firstbutton.addEventListener("mouseleave", () => {
  secondbutton.classList.remove("secondbutton");
});

secondbutton.addEventListener("mousemove", () => {
  firstbutton.classList.add("firstbutton");
});
secondbutton.addEventListener("mouseleave", () => {
  firstbutton.classList.remove("firstbutton");
});

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

document.getElementById("homeNaw").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  document.getElementById("aboutNaw").addEventListener("click", function () {
    window.location.href = "https://pikabu.ru/story/istoriya_pro_troikh_druzey_4712998";
  });
  
  document.getElementById("findNaw").addEventListener("click", function () {
    document.querySelector(".subscribe").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("shareNaw").addEventListener("click", function () {
    document.querySelector(".allchoice").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("promoteNaw").addEventListener("click", function () {
    document.querySelector(".thanksFor").scrollIntoView({ behavior: "smooth" });
  });
