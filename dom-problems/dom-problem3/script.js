/*1. write the html portion out with the appropriate table 
and button tags
2. give the table element an id so it can be located 
3.give button an id and an onlick attribute  
4. define a function myFunction that has a variable  table set equal to 
the id theTable to find the start of the table. 
5 then define a row variable and have it insert a row in the
first postion on the table
*/
function myFunction() {
	const table = document.getElementById("theTable");
	const row = table.insertRow(0);
	var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "rx7 jet";
    cell2.innerHTML = "NEW CELL2";
}