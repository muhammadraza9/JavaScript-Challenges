// Return the number of vowels in a string


let str = "Learning JavaScript";

function vowels(str){
         let count = 0;
         let vowl = "aeiou";
         
      for(let i = 0; i < str.length; i++){
            if(vowl.includes(str[i])){
               count++;
            }
      }  
      
      return count ;
};

console.log(vowels(str));

