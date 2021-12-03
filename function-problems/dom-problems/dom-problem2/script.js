/* 1. tell the computer to use the getElementById method to find the link attribute on the page
2.then use the getAttribute to target the href attribute
3. use innerHTML method on p2 to grab the information in the element 
4. use the mybtn id and the onclick attribute (getHref()) to get the attribute of the link

*/
function getHref(){
	const linkUrl = document.getElementById("link").getAttribute("href");
	document.getElementById("p2").innerhtml = linkUrl;
	document.getElementById('mybtn').getAttribute("onclick");

}