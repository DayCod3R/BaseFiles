//Check off Specific ToDo w/ click
$("ul").on("click", "li", function(){
	//Long function
	/* //if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
		$(this).css({
		color: "black",
		textDecoration: "none"
		});
	}
	//else
	else {
		//turn it gray
		$(this).css({
		color: "gray",
		textDecoration: "line-through"
		});
	}
	*/
	
	//Click event EZ
	$(this).toggleClass("completed");
});


//Click on X to Delete ToDo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//To stop Event bubbling(span in LI, in Div, in Body)
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	//When ENTER key clicked
	if(event.which === 13){
		//grabbing new Todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li, add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")		
		}
	});