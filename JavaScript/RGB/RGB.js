var numSquares = 6;
var colors = []; 
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

/*
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});	

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});	
	*/

resetButton.addEventListener("click", function(){
	reset();
	/* OR
	//generate all new colors
colors = generateRandomColors(numSquares);
	//pick new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked Color
colorDisplay.textContent = pickedColor;
	this.textContent = "Reset";

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	*/
})
	
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr =[]
	//add num random colors
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return array
	return arr;

}
function randomColor(){
	//pick a red
	var r = Math.floor(Math.random() * 256);
	//pick a green
	var g = Math.floor(Math.random() * 256);
	///pick a blue
	var b = Math.floor(Math.random() * 256);
	//"rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setupModeButtons(){
	///mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
//Turnary operator above. If function alternative
		/*if(this.textContent === "Easy"){
			numSquares = 3;
		} else{
				numSquares = 6;
		}*/
		reset();
		});
	}
}

function init(){
	setupModeButtons();
	setupSquares();
}

function setupSquares(){
for(var i = 0; i < squares.length; i++){
	/*add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	*/
	
	//add click listeners 
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
			}
		});
	}
	reset();
}

function reset(){
	colors = generateRandomColors(numSquares);
//pick new random color from array
	pickedColor = pickColor();
//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Reset";
	messageDisplay.textContent ="";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

}




[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]