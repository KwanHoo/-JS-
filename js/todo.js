const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
// const todoInput = document.querySelector("#todo-form input"); 둘이 동일
const toDoList = document.getElementById("todo-list");

function handleToDOSubmit(event) {
    event.preventDefault();
    console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    console.log(newTodo, todoInput.value);
}

toDoForm.addEventListener("submit", handleToDOSubmit);