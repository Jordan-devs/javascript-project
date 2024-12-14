//getting elements from the dom
const ratings = document.querySelectorAll(".rating");
const feedback = document.querySelector(".feedback");
const btn = document.querySelector("button");

let notSelected = "selected";

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    notSelected = rating.getAttribute("data-attribute");
    activeState(rating);
  });
});

function activeState(selected) {
  //remove previous rating with active class
  ratings.forEach((rate) => {
    rate.classList.remove("active");
  });
  //add active class
  selected.classList.toggle("active");
}

btn.addEventListener("click", () => {
  //check if there was no selected rating
  if (notSelected) {
    alert("Please chose a rating");
  } else {
    feedback.innerHTML = `
            <div class="emoji-group">
          <div class="rating">
            <span>💖</span>
            <h4>Thanks for your Feedback</h4>
          </div>`;
  }
});
