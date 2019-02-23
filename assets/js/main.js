

const button = document.querySelector("#contact");
const el = document.querySelector(".contact");

button.addEventListener("click", () => {
    el.classList.toggle("visible");
});
