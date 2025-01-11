const joke = document.querySelector(".joke");
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  try {
    joke.innerHTML = "loading...";
    const data = await fetch("https://api.chucknorris.io/jokes/random");
    if (!data.ok) {
      new Error(data.statusText);
    }
    const jokes = await data.json();
    joke.innerHTML = jokes.value;
  } catch (error) {
    console.log(error);
  }
}
