// Check if a string is a palindrome


function palindrome(str){
          let reverse = "" ;
          
          for(let i = str.length - 1; i >= 0; i-- ){
                  reverse += str[i];
              }

              if(str === reverse){
                        return true;    
              }
              else{
                        return false;    
              }
          
}

console.log(palindrome("mom"));
console.log(palindrome("string"));
console.log(palindrome("refer"));