/* will need to use the onclick function
and link it to the href attribute
create an onlick button

*/
function getHref(){
	const linkUrl = document.getElementById("link").getAttribute("href");
	document.getElementById("p2").innerhtml = linkUrl;
	document.getElementById('mybtn').getAttribute("onclick");

}