// This homework declare need to function
// Homework: 1
// write a function that will take 3 numbers will return the max number
// Write a function that will take 3 parameters and will return the min number

// first time do it using if-else
// second time do it using Math.min or Math.max
// ----- Homework-1
const num1 =554;
const num2= 654;
const num3=825;
if(num1 > num2 && num1 > num3){
    console.log("Max number is :", num1);
}
else if(num2 > num1 && num2 > num3){
    console.log("Max number is :", num2);
}
else{ 
    console.log("Max number is :", num3);
}
// Homework-1 another way
const highest = Math.max(554,654,825);
console.log("Max number is:" ,highest);