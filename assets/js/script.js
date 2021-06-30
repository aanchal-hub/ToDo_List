//CHECK OFF SPECIFIC TODOS BY CLICKING
$("ul").on('click', "li", function(){ // select parent element ul and on('click') on li for upcoming changes
	$(this).toggleClass("completed"); //one line instead of below code
	//to understand above concept
	// //check if li is grey
	// if ($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css("color", "rgb(0, 0, 0)"); //always remember to put spaces while using rgb
	// 	$(this).css("textDecoration", "none");
	// }
	// else{
	// 	$(this).css({
	// 		color :"rgb(128, 128, 128)",
	// 		textDecoration : "line-through"
	// 	});
	// }
});

//CLICK ON X TO DELETE A TODO
//event  bubbling occurs here i.e. events of parent elements are triggered span>li>ul>body>
$("ul").on('click', "span", function(event){
	$(this).parent().fadeOut(500, function(){ //selecting span element through first this, then selecting parent element li
											  // giving a fadeOut effect which just fades out doesn't remove
											  // so giving effects for 500ms and removing it using function
		$(this).remove();					  // here second this is parent element li and removing li then
	}); 
	event.stopPropagation(); //stops event bubbling
});


//Before creating a new To-Do 
//NOTE : the difference between click() and on('click') is that 
// click() only adds listeners to existing element and
// on('click') add listeners to all potential upcoming future elements

//CREATING A TODO THROUGH INPUT
$("input[type='text']").keypress(function(e){
	if (e.which === 13){
		//grabbing the new todo from input
		var newTodo = $(this).val(); // get value
		$(this).val(""); // set value to blank 
		//create a new li and add to ul
		$("ul").append("<li><span>X</span> " + newTodo + "</li>"); // append new li to ul
	}
});