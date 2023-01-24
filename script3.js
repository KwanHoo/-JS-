//* 방법1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 방법2
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

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

loginButton.addEventListener("click", handleBtnClick)