const title = document.getElementById("title");

title.innerText ="Got you";

console.dir(title.id);
console.dir(title.className);

const hellos = document.getElementsByClassName("Hello");

console.log(hellos);


const title3 = document.getElementsByTagName("h3");
console.log(title3)

const title3_1 = document.querySelector(".hello11 h4");
console.log(title3_1);

// 아래 두개는 같은 결과를 얻음
//const title4_1 = document.querySelector("#test");
//const title4_2 = document.getElementById("test");

