//  Sort an array from lowest to highest


const array = [8,6,5,9,3,4,1,12,22,44];

array.sort();
//array.sort((a,b) => a - b);

console.log(array);


//// function

function sort(array){
              return array.sort((a,b) => a - b);
}


console.log(sort(array));