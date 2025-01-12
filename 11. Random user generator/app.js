const btn = document.querySelector(".btn");
const info = document.querySelector(".info");

btn.addEventListener("click", () => {
  getPerson(getData);
});

async function getPerson(cb) {
  try {
    info.innerHTML = "loading...";
    btn.disabled = true;
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    info.innerHTML = `
        <p>First Name: <span id="first"></span></p>
        <p>Last Name: <span id="last"></span></p>
        <p>Location: <span id="location"></span></p>
        <p>Phone: <span id="phone"></span></p>
        <p>Email: <span id="email"></span></p>
    `;
    cb(data, showData);
  } catch (error) {
    console.log(error);
    info.innerHTML = "failed to fetch data, please try again";
    btn.disabled = false;
  }
}

function getData(element, cb) {
  const {
    name: { first },
    name: { last },
    location: { country },
    picture: { large },
    email,
    phone,
  } = element.results[0];
  console.log(element.results[0]);

  cb(first, last, country, large, email, phone);
}

function showData(first, last, country, large, email, phone) {
  document.querySelector("#name").textContent = `${first} ${last}`;
  document.querySelector("#first").textContent = `${first}`;
  document.querySelector("#last").textContent = `${last}`;
  document.querySelector("#location").textContent = `${country}`;
  document.querySelector("#phone").textContent = `${phone}`;
  document.querySelector("#img").src = `${large}`;
  document.querySelector("#email").textContent = `${email}`;
  btn.disabled = false;
}
