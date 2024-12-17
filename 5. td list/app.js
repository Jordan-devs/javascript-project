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
              <box-icon name="trash" animation="tada-hover"></box-icon>
            </div>`;

  todo.appendChild(cont);
  todo.appendChild(del);
  todos.appendChild(todo);

  //adding check functionality

  check.addEventListener("click", (e) => {
    check.classList.toggle("checked");
    if (check.classList.contains("checked")) {
      check.textContent = "✔";
    } else {
      check.textContent = "";
    }
    text.classList.toggle("completed");
  });

  //deleting object
  del.addEventListener("click", (e) => {
    todos.removeChild(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  value = input.value;
  if (!value.trim()) return;
  input.value = "";
  makeTodo(value);
});
