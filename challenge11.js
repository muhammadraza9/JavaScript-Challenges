// Create a function that finds the maximum number in an array


const numbers = [4,7,90,76,55,1];


function maxnum(numbers){
         let max = numbers[0];
         
     for(let i = 1; i < numbers.length; i++){
          if(numbers[i] > max){
              max = numbers[i];
          }    
     } 
     
     return max ;
}

console.log(maxnum(numbers));