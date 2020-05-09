var numSquares = 6;
var color = generateRandomColors(numSquares);
var pickedColor = pickColor();
var message = document.getElementById("message");
var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

var modeButton = document.querySelectorAll(".modeButton");
var displayText = document.getElementById("displayText");

displayText.textContent=pickedColor;

for(var i=0; i<modeButton.length; i++){
	modeButton[i].addEventListener("click" , function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="EASY")
			numSquares=3;
		else
			numSquares=6;

		reset();

	});
}
resetButton.addEventListener("click" , function(){
	reset();

});





for(var i = 0; i<square.length; i++){

	square[i].style.background=color[i];
	
	square[i].addEventListener("click" , function(){
	var clickedColor = this.style.background;
	if(clickedColor === pickedColor){
		message.textContent = "CORRECT!!";
		message.style.color=pickedColor;
			changeColors(pickedColor);
		h1.style.background = pickedColor;

		resetButton.textContent="PLAY AGAIN ?";

	}
	else{
		this.style.background = "#232323";
		message.style.color= "#232323";
		message.textContent = "TRY AGAIN";
		
	}

});

}

function changeColors(color){
	for(var j =0; j<square.length; j++){
			square[j].style.background= color;
		}
}

function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i=0; i < num; i++){
		arr[i]= randomColor();
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}

function reset(){

	color = generateRandomColors(numSquares);
	pickedColor=pickColor();
	displayText.textContent=pickedColor;
	for(var i = 0; i<square.length; i++){
		if(color[i]){
			square[i].style.display ="block";
			square[i].style.background=color[i];
		}
		else{
			square[i].style.display ="none";
		}
	

	resetButton.textContent="NEW COLORS";
	message.textContent="";
}
h1.style.background="steelblue";

}

