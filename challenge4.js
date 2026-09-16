// Calculate the sum of numbers within an array
// sum of a particular column or row number in a table.


const arrtab = [
              [2,5,78,90,45],
              [6,7,89,55,40],
              [8,34,22,67,0],
];

function sumtab(arrtab, row){
              let sum = 0;
         
         for(let i = 0; i < arrtab[row].length; i++){
                 sum += arrtab[row][i];
         };
         
         return sum ;
};

console.log(sumtab(arrtab, 1));