const  car = {
make: "mazda", 
model: "rx-7", 
color: "black",
};

function propertyDelete(obj, prop) {
	delete obj[prop];
	return obj;

}



console.log(propertyDelete(car, "model"));
