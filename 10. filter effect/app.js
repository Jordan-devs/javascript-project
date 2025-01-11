const search = document.querySelector("#search");
const user_list = document.querySelector(".user-list");
const loading = document.querySelector(".loading");
const theme = document.querySelector("#theme");
let items = [];

fetchUsers();

search.addEventListener("input", (e) => {
  filterUser(e.target.value);
});

async function fetchUsers() {
  try {
    const data = await fetch("https://randomuser.me/api?results=50");
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    const { results } = await data.json();
    loading.style.display = "none";

    results.forEach((user) => {
      const li = document.createElement("li");
      li.classList.add("user-info");
      items.push(li);

      li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}"/>
        <div class="details">
            <h3>${user.name.first} ${user.name.first}</h3>
            <p>${user.location.state}, ${user.location.country}
        </div>
        `;

      user_list.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

function filterUser(searchItem) {
  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

//dark theme / light theme

theme.addEventListener("click", () => {
  const body = document.body;
  body.toggleAttribute("dark-mode");
});
