/*
Write a JavaScript function to remove duplicate items from an array 
(consider case sensitivity).
Example array: [1,2,2,4,5,4,7,8,7,3,6]
NOTE: Do NOT use the Set method.
1. define function that takes in an array as a paramenter
2. set up for each loop to check for duplicae the items in the array
3. remove duplicate items from array into new array
*/


let girls = ["becky", "dana", "becky", "Monica", "rachel","brandy"]  
function myGirls (arry) {
    let newOne = []; 

    for(let i = 0; i < arry.length; i++) {
        if(!newOne.includes(arry[i])) {
            newOne.push(arry[i]);
        };
    };
    return newOne;
};

console.log(myGirls(girls));  



    

