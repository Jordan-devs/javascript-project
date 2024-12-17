const questions = [
  {
    question: "How do you feel about solving puzzles or logical problems?",
    options: [
      { answer: "I’m okay with it, but it can get frustrating", type: "maybe" },
      { answer: "I love it and find it fun", type: "correct" },
      { answer: "I dislike it and avoid it", type: "wrong" },
    ],
  },
  {
    question: "How do you respond to failure or mistakes?",
    options: [
      {
        answer: "I see it as an opportunity to learn and grow",
        type: "correct",
      },
      { answer: "I find it hard to move on and lose interest", type: "wrong" },
      { answer: "I get discouraged but eventually try again", type: "maybe" },
    ],
  },
  {
    question: "Do you enjoy working on tasks that require attention to detail?",
    options: [
      { answer: "Sometimes, but I can lose patience", type: "maybe" },
      {
        answer: "No, I prefer tasks that don’t require much detail",
        type: "wrong",
      },
      { answer: "Yes, I enjoy tasks that challenge my focus", type: "correct" },
    ],
  },
  {
    question:
      "How much time are you willing to dedicate to learning something new?",
    options: [
      {
        answer: "I can dedicate several hours a week consistently",
        type: "correct",
      },
      {
        answer: "I can dedicate some time, but not consistently",
        type: "maybe",
      },
      { answer: "I don’t have much time to spare", type: "wrong" },
    ],
  },
  {
    question: "Do you like experimenting with new technologies or apps?",
    options: [
      { answer: "Yes, I’m always curious to try new things", type: "correct" },
      { answer: "No, I stick to what I already know", type: "wrong" },
      {
        answer: "Sometimes, but only if it’s easy to understand",
        type: "maybe",
      },
    ],
  },
  {
    question:
      "Are you comfortable asking for help when you don’t understand something?",
    options: [
      { answer: "Sometimes, but I feel shy about it", type: "maybe" },
      { answer: "Yes, I actively seek help and feedback", type: "correct" },
      { answer: "No, I prefer figuring things out on my own", type: "wrong" },
    ],
  },
  {
    question:
      "Do you enjoy learning new concepts or skills by reading or watching tutorials?",
    options: [
      {
        answer: "Yes, I enjoy exploring and learning through tutorials",
        type: "correct",
      },
      {
        answer: "I can manage, but I prefer being taught in person",
        type: "maybe",
      },
      {
        answer: "No, I find it hard to stay engaged with tutorials",
        type: "wrong",
      },
    ],
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let totalScore = 0;
let selectedAnswers = []; // To keep track of selected answers

const scores = {
  correct: 2,
  maybe: 1,
  wrong: 0,
};

const questionContainer = document.getElementById("question-container");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const resultDiv = document.getElementById("result");

function loadQuestion(index) {
  const currentQuestion = questions[index];
  questionContainer.innerHTML = `
    <div class="question">
      <h2>${currentQuestion.question}</h2>
      <ul class="options">
        ${currentQuestion.options
          .map(
            (option, i) => `
          <li data-type="${
            option.type
          }" onclick="selectOption(this, ${index}, ${i})" 
          class="${selectedAnswers[index] === i ? "selected" : ""}">
            ${option.answer}
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;

  // Enable/disable buttons
  previousButton.disabled = index === 0;
  nextButton.textContent = index === questions.length - 1 ? "Submit" : ">";
}

function selectOption(optionElement, questionIndex, optionIndex) {
  // Update selected answer
  selectedAnswers[questionIndex] = optionIndex;

  // Clear previous selection
  const options = document.querySelectorAll(".options li");
  options.forEach((opt) => opt.classList.remove("selected"));

  // Highlight selected option
  optionElement.classList.add("selected");
}

previousButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
});

nextButton.addEventListener("click", () => {
  const selectedOption = selectedAnswers[currentQuestionIndex];
  if (selectedOption === undefined) {
    alert("Please select an answer before proceeding!");
    return;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    calculateScore();
    showResult();
  }
});

function calculateScore() {
  totalScore = selectedAnswers.reduce((score, answerIndex, questionIndex) => {
    const answerType = questions[questionIndex].options[answerIndex].type;
    return score + scores[answerType];
  }, 0);
}

function showResult() {
  questionContainer.innerHTML = "";
  previousButton.style.display = "none";
  nextButton.style.display = "none";

  let feedback = "";
  if (totalScore >= 10) {
    feedback = "Strong aptitude for coding. You can learn coding easily!";
  } else if (totalScore >= 6) {
    feedback =
      "Moderate aptitude. You can learn coding if you stay consistent and work on weak areas.";
  } else {
    feedback =
      "Coding may be challenging for you. Consider improving skills like problem-solving and persistence before diving in.";
  }

  resultDiv.innerHTML = `Your Score: ${totalScore}<br>${feedback}`;
}

// Initialize the quiz
loadQuestion(currentQuestionIndex);
