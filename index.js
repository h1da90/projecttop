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
  window.location.href = "YOUR_LINK_HERE";
});

document.getElementById("findNaw").addEventListener("click", function () {
  const dropdown = document.getElementById("findDropdown");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

document.getElementById("shareNaw").addEventListener("click", function () {
  document.querySelector(".allchoice").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("promoteNaw").addEventListener("click", function () {
  document.querySelector(".thanksFor").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("headBtn").onclick = function (e) {
  document.getElementById("headIn").value = "";
};
document.getElementById("firstbutton").addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/iloza._/";
});
document.getElementById("secondbutton").addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/watch?v=8e2CS0wPz9I";
});
document.getElementById("subbut").addEventListener("click", function () {
  window.location.href =
    "https://lalafo.kg/bishkek/doma-i-dachi/prodazha-domov";
});
document.getElementById("subbut2").addEventListener("click", function () {
  window.location.href = "http://an.kg/kupit-dom/";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".animated").forEach((el) => {
  observer.observe(el);
});
