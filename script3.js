//* 방법1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querytinaitSelector("input");
// const loginButton = loginForm.querySelector("button");

// 방법2
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function handleBtnClick(){
    // console.dir(loginInput.value);
    // console.log("click!!!");

    const userName = loginInput.value;
    console.log(userName);

    //* JS를 이용할시 validation 체크
    // if(userName === ""){
    //     console.log("Please write your name!!");
    //     alert("Please write your name!!!")
    // }else if(userName.length > 15){
    //     alert("Your name is too long.")
    // }else{
    //     console.log("good!!")
    // }
}
function onLoginSubmit(event){
    event.preventDefault();
    // console.log(event);
    console.log(loginInput.value);
    const username = loginInput.value;
    // console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);

}

function handleLinkClick(event){
    console.log(event);
    console.dir(event);
    event.preventDefault();
    alert("clicked"); //! alert은 모든 동작을 막음! (그래서 이제 아무도 사용을 하지 않음)
}

// loginButton.addEventListener("click", handleBtnClick)
//loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

function paintGreetings(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    // greeting.innerText = `Hello ${savedUsername}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}