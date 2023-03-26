const navigationLink = document.getElementById("navigation");

const btnClear = document.getElementById("clear");
const todoList = document.querySelector("ul");

const input = document.getElementById("user-todo");
const form = document.querySelector("form");

const todoMaker = function (text) {
  const todo = document.createElement("li");
  todo.textContent = text;
  todoList.appendChild(todo);
};
// const todosArray = [];
let todosArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

localStorage.setItem("todos", JSON.stringify(todosArray));
const storage = JSON.parse(localStorage.getItem("todos"));
for (let i = 0; i < storage.length; i++) {
  todoMaker(storage[i])
}

btnClear.addEventListener("click", function () {
  localStorage.clear();
  todosArray = [];
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});


form.addEventListener("submit", function (e) {
  e.preventDefault();
  todosArray.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todosArray));
  console.log(todosArray);
  todoMaker(input.value);
  input.value = "";
});

//----------------------------- DOM Bitiş -----------------------------
