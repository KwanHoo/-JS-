const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
// const todoInput = document.querySelector("#todo-form input"); 둘이 동일
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
    // console.log("testing");
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    // console.log("I will paint ", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDOSubmit(event) {
    event.preventDefault();
    // console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    // console.log(newTodo, todoInput.value);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDOSubmit);