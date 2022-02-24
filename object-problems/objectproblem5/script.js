/*Write a JavaScript function to sort the following array of objects by title value.
*/
let bookInfo = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

   function titleOrder (arry) {	
    return arry.sort(function(a, b){
  		let x = a.title.toLowerCase();
 		let y = b.title.toLowerCase();
 		if (x < y) {return -1;}
  		if (x > y) {return 1;}
  		return 0;
	});
  }    
    
  console.log(titleOrder(bookInfo));																																						