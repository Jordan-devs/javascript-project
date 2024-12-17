//Getting elements from the dom
const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");

function makeTodo(value) {
  //making elements
  let todo = document.createElement("div");
  todo.classList.add("todo");

  let cont = document.createElement("div");

  let check = document.createElement("div");
  check.classList.add("check");
  cont.appendChild(check);

  let text = document.createElement("div");
  text.classList.add("text");
  text.textContent = value;
  cont.appendChild(text);

  let del = document.createElement("div");
  del.innerHTML = `
              <div>
              <lord-icon trigger="hover" src="trash.json" state="hover-roll"></lord-icon>
            </div>`;

  todo.appendChild(cont);
  todo.appendChild(del);
  todos.appendChild(todo);
}

//adding check functionality

todos.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("check")) {
    e.target.classList.toggle("checked");
    e.target.textContent = e.target.classList.contains("checked") ? "✔" : "";
    e.target.nextElementSibling.classList.toggle("completed");
  } else if (e.target.closest("lord-icon[trigger ='hover']")) {
    e.target.closest(".todo").remove();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value.trim()) return;
  input.value = "";
  makeTodo(value);
});
