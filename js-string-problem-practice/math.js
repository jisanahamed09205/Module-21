// Power declare
const result = Math.pow(3, 2);
// console.log(result);

// Absolute both number declare
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    // console.log("You guys can be friends");
}
else{
    // console.log("You guys stay apart");
}

// -------------------
// declare decimal number to Math round and ceil,and floor 
// -------------------
const number = 2.656;
const fullName = Math.round(number);
// console.log(fullName);
const result2 = Math.ceil(2.60001);
const result3 = Math.floor(456.68454);
// console.log(result3);
// console.log(result2);


// -------------------
// Random
// console.log(Math.random());
for(let i = 0; i < 20;i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}