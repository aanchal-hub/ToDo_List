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
$("span").click(function(){
	alert("done");
});