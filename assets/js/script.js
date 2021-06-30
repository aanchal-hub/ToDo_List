//CHECK OFF SPECIFIC TODOS BY CLICKING
$("li").click(function(){
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
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){ //selecting span element through first this, then selecting parent element li
											  // giving a fadeOut effect which just fades out doesn't remove
											  // so giving effects for 500ms and removing it using function
		$(this).remove();					  // here second this is parent element li and removing li then
	}); 
	event.stopPropagation(); //stops event bubbling
});