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
player3.points = 3000; //update
console.log(player3);



//-> 에러는 상수 전체를 하나의 값으로서 업데이트 하려고 할 떄 발생하게 됨
//* 에러 예시
//* player3 = false;
//* console.log(player3); -> error 메세지 출력됨


//* function
// None function...
console.log("Hello my name is mori0");
console.log("Hello my name is mori1");
console.log("Hello my name is mori2");
console.log("Hello my name is mori3");
console.log("Hello my name is mori4");
console.log("Hello my name is mori5");


//* 코드의 반복을 줄여보자!!

function sayHello(test){
    console.log("Hello my name is " + test)
};
sayHello('mori7');


function orderHam(menu, sizeupAv, takeOutAv){
    console.log("주문하신 "+ menu + "사이즈 "+sizeupAv +"이시고 " + takeOutAv+" 주문맞으신가요?" )
};

orderHam('와퍼','기본','포장');
orderHam('베이컨토마토디럭스', '라지', '매장');


function plus(firstNum, secondNum){
    console.log(firstNum + secondNum);
}

function divide(a, b){
    console.log(a / b);
}

plus(200, 300);
divide(35, 7);


const player4 = {
    name: 'mori',
    sayHello: function(otherPersonsName){
        console.log('Hello!'+otherPersonsName);
    }
}

console.log(player4.name);
player4.sayHello('lynn');

//* recep  tesk
const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    times: function(a, b){
        console.log(a * b);
    },
    power: function(a, b){
        console.log(a ** b);
    }
}

calculator.add(1,2);
calculator.minus(1,2);
calculator.divide(1,2);
calculator.times(1,2);
calculator.power(1,2);

//* return ex1
const calculator2 = {
    add: function(a, b){
        alert(a + b);
    },
    minus: function(a, b){
        alert(a - b);
    },
    divide: function(a, b){
        alert(a / b);
    },
    times: function(a, b){
        alert(a * b);
    },
    power: function(a, b){
        alert(a ** b);
    }
}

console.log(calculator.add(1,2)); // undefined
// calculator2.minus(1,2);
// calculator2.divide(1,2);
// calculator2.times(1,2);
// calculator2.power(1,2);


//* return ex2
const age = 96;
function calculateKrAge(ageOfforeigner){
    ageOfforeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);  //! undefined??
//* return!!!


//* return ex3
const age1 = 96;
function calculateKrAge2(ageOfforeigner){
    return ageOfforeigner + 2;
}

const krAge1 = calculateKrAge2(age1);
console.log(krAge1); 


//* return ex3
const calculator3 = {
    add: function(a, b){
        return(a + b);
    },
    minus: function(a, b){
        return(a - b);
    },
    divide: function(a, b){
        return(a / b);
    },
    times: function(a, b){
        return(a * b);
    },
    power: function(a, b){
        return(a ** b);
    }
}


const plusResult = calculator3.add(2,3);  //5
const minusResult = calculator3.minus(plusResult, 10); // -5
const timeResult = calculator3.times(10, minusResult); // -50
const divideResult = calculator3.divide(timeResult, plusResult); // -10
const powerResult = calculator3.power(divideResult, minusResult);


//*  Conditionals
// if i can drink or not??
// how old?

//const age_ex = prompt("How old are you?"); // new window 
// js를 일시 정지 시키게 됨 <---- waiting for us

// 입력되는 타입을 확인하면 string

//console.log(age_ex);
//console.log(typeof age_ex) // string

console.log(typeof parseInt("15"), typeof "15");

console.log(parseInt('test')); //Nan

//
const age_test = parseInt(prompt("How old are you??"));
//const age_test = prompt("How old are you??");

console.log('first'); 
console.log(age_test); // NaN
console.log('here');
console.log(typeof age_test); // number
//if age is not a number??
console.log(age_test == NaN); // false
console.log(age_test != NaN); // true
console.log(age_test == 'NaN'); // false
console.log(age_test != 'NaN'); // true
console.log('isNaN testing');
console.log(isNaN(age_test)); // true

// if ((typeof age_test) == NaN){
if (isNaN(age_test)){
    const age_test2 = parseInt(prompt("Please write a Number... How old are you??"));
    console.log(age_test2);
}else{
    console.log('Thank you for writing your age.');
}


//* isNaN -> boolean type으로 아웃풋 return 

// if(conditon){
    /// condition === true
//} else {
    /// condition === false
//}




