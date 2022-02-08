/*Create an object, then write a JavaScript 
function that checks whether an object contains the specified key.
*/
	let newObjects = {
		movie: "et",
		rated: "g",
		age: 12
	};

	function containsObjectKey(obj, key) {
		    return obj.hasOwnProperty(key);
	  
	}
	 console.log(containsObjectKey(newObjects, "age"));