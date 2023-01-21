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

//* Objects

// 1) variable
const playerName = "Ralo";
const playerPoints = 2400;
const playerHandsome = false;
const playerFat = "little bit";
//player.name ??
//player.point??
//player.handsome


// 2) array
//player[0] == name;
//player[1] == points;
const player1 = ["Paka", "9999", false, "MolRu" ];

// 3) object
const player3 = {
    name: "Dopa",  //property
    points: "2800",
    playerHandsome: true,
    playerFat: "not bad"
};

console.log(player3);
console.log(player3.name);
console.log(player3["points"]);
// palyer.name

// object property add or update
//! 의문점!!! const(상수)는 수정을 할 수 없다고 했는디???
//! player3를 상수로 선언했는데 왜 프로퍼티 추가가되지???
//* object 안의 무언가를 수정하는 거임, 객체는 아직 동일함
//-> 에러는 상수 전체를 하나의 값으로서 업데이트 하려고 할 떄 발생하게 됨

player3.fat = false; //add
player3.points = 3000;
console.log(player3);



//-> 에러는 상수 전체를 하나의 값으로서 업데이트 하려고 할 떄 발생하게 됨
//* 에러 예시
//* player3 = false;
//* console.log(player3); -> error 메세지 출력됨

