/* Create an object with three items in it, then write a JavaScript function 
that accepts an object and tells you the length (tells you how many items are in it) of the object.
*/

let threeObjects = {
	haircolor: "blue",
	eyecolor: "green",
	type: "new",
    age: 42,
    shape: "round"

};

function lengthOfObject (obj) {
         objectLength = Object.keys(obj).length
         return objectLength

};
console.log(lengthOfObject(threeObjects))
 