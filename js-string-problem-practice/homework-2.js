// Write a function to get the lowest number in an array
function minInArray(numbers){
    let lowerest = numbers[0];
    for(let i = 0; i <numbers.length; i++){
        const index = i;
        const element =numbers[index];
        if(element < lowerest){
            lowerest = element;
        }
    }
    return lowerest;
}
const minimum = [167, 190, 120, 80, 165, 137, 265];
const lowest = minInArray(minimum);
console.log("Lowest number is:",lowest);