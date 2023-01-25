const clock = document.querySelector("h2#clock");

// clock.innerText = "TESTSTT";

function sayHello(){
    console.log("hello");
}

//setInterval(sayHello, 5000); //5s

setTimeout(sayHello, 5000);

function getClock(){
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

getClock();
setInterval(getClock, 1000);