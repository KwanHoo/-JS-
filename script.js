// alert("test");

console.log(3.141592);
console.log("lalalalal");

console.log(5+2);
console.log(5*2);
console.log(5/2);

// variable 값을 저장하거나 유지하는 역할을 함
const x = 24;
console.log(x + 100);
console.log(x * 100);
console.log(x / 100);

const myName = "mori";

console.log("hello " + myName);

//* boolean
//* true false null undefined

const amIFat = true;
console.log(amIFat);

const empNo = null;
let somethingNum; // undefiend
console.log(empNo);

console.log(somethingNum);

//* array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + thu + wed + thu + fri + sat + sun;

console.log(daysOfWeek);

const daysOfWeeks = [mon , thu , wed , thu , fri , sat , sun]; //array

const nonsense = [1,2, 'hello', false, null, true, undefined, "mori"];
console.log(daysOfWeeks);
console.log(nonsense);

const daysOfWeekText = ['mon' , 'thu' , 'wed' , 'thu' , 'fri' , 'sat' , 'sun']; //array
console.log(daysOfWeekText);
console.log(daysOfWeekText[0]);

// add one more day to the array
daysOfWeekText.push('testDay');
console.log(daysOfWeekText);

const toBuy  = ["chair", "desk"];
toBuy.push("monitor");