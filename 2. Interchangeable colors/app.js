const body = document.body;
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    changeColor(color);
  });
});

function changeColor(color) {
  body.className = "";
  body.classList.add(color);
}
