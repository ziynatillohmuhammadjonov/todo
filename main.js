const todoInput = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todoInput.value !== "") {
    let item = document.createElement("li");
    item.textContent = todoInput.value;
    list.appendChild(item);
    todoInput.value = "";
  } else {
    todoInput.value = "Iltimos to do kirting!";
  }
});
