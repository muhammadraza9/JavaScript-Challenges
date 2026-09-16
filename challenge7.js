// Create a function that filters out negative numbers

const numbers = [2,4,-2,-3,5,-6,9,-8,0];

const output = numbers.filter((number) => number >= 0);

console.log(output);


// function 

function filnum(numbers){
          return numbers.filter((num) => num < 0);    
}

console.log(filnum(numbers));