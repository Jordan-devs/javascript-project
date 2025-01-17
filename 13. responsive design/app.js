const toggleBtn = document.querySelector("#toggle-btn");
const sideBar = document.querySelector("#sideBar");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.toggle("close");
  toggleBtn.classList.toggle("rotate");

  closeDropdown();
});

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeDropdown();
  }
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sideBar.classList.contains("close")) {
    sideBar.classList.toggle("close");
  }
}

function closeDropdown() {
  const dropdowns = document.querySelectorAll(".sub-menu");
  dropdowns.forEach((element) => {
    element.classList.remove("show");
    element.previousElementSibling.classList.remove("rotate");
  });
}
