const clock = document.querySelector("h2#clock");

// clock.innerText = "TESTSTT";

function sayHello(){
    console.log("hello");
}

//setInterval(sayHello, 5000); //5s

setTimeout(sayHello, 5000);

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);