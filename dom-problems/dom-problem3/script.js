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
	const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = "rx7 ";
    cell2.innerHTML = "jet";
    cell3.innerHTML = "greyhound";
}