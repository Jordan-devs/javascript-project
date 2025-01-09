const copyBtn = document.querySelector(".copyBtn");
const moveBtn = document.querySelector(".moveBtn");
const copyText = document.querySelector("textarea[name=copyText");
const moveText = document.querySelector("textarea[name=moveText");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", copyToClipBoard);
moveBtn.addEventListener("click", () => {
  moveText.value = copyText.value;
});
copyText.addEventListener("input", () => {
  moveText.value = copyText.value;
});

function copyToClipBoard() {
  const output_container = document.querySelector(".output-container");
  let textValue = copyText.value;
  const textarea = document.createElement("textarea");
  output_container.appendChild(textarea);
  textarea.value = textValue;
  textarea.select();
  document.execCommand("copy");
  output_container.removeChild(textarea);
  output.innerHTML = `<h3>Copied successfully</h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.innerHTML = "";
  }, 2000);
}
