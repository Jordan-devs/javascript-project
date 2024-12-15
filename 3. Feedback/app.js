// Getting Elements From The DOM
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

// Attaching Event
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    remove();

    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

function remove() {
  ratings.forEach((rate) => {
    rate.classList.remove("active");
  });
}

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <p class="heart">💖</p>
  <strong>Thanks for your Feedback: ${selectedRating}</strong>`;
});
