const todoInput = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todoInput.value !== "") {
    let item = document.createElement("li");
    item.innerHTML = `
    <p>${todoInput.value}</p>
    <div class='button-wrapper'>
    <i class="fa-solid fa-pencil"></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    `;
    list.appendChild(item);
    todoInput.value = "";
    const edit = document.querySelectorAll(".fa-pencil");
    const del = document.querySelectorAll(".fa-trash");
  } else {
    todoInput.value = "Iltimos to do kirting!";
  }
});
