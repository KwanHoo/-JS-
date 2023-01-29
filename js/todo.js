const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
// const todoInput = document.querySelector("#todo-form input"); 둘이 동일
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    // console.log("I will paint ", newTodo);
    const li = document.createElement("li");
             
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