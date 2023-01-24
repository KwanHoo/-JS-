//* 방법1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 방법2
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleBtnClick(){
    console.dir(loginInput.value);
    console.log("click!!!");
}

loginButton.addEventListener("click", handleBtnClick)