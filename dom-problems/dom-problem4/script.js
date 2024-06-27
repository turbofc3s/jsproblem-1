// Problem 4: Create an HTML page with a dropdown list with 
// three items in it, then write a JavaScript function that 
// displays the number of items and displays the item in the list.

		

function getOptions(){
    //grab the select element with the corresponding ID;
    const myDrinks= document.getElementById("drinks")

    //grab the number of items inside the select element;                      
    const numOfItems = document.getElementById("drinks").length;             
    // console.log(numOfItems);


    //grab the selected dropdown option
    const selectedOption = myDrinks.options[myDrinks.selectedIndex].value;
    let stringOfOptions = "";
    console.log(selectedOption);

    for (let i = 0; i < myDrinks.length; i++) {
        stringOfOptions = selectedOption + ", " + numOfItems;
    }

    
    document.getElementById("p1").innerHTML = stringOfOptions;
}
    