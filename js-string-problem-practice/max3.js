const jim = 69;
const dela = 97;
const chinku = 97;

if(jim > dela && jim > chinku){
    console.log("Jim will get the cake");
}
else if(dela > jim && dela > chinku){
    console.log("Dela will get the cake");
}
else{
    console.log("Chinku will get the cake");
}
// Another Way
const highest = Math.max(69, 97, 97);
console.log(highest);