var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomInteger(max) {
	return(Math.floor(Math.random() * (max + 1)));
}

function randomColor(){
	var r1 = randomInteger(255);
	var g1 = randomInteger(255);
	var b1 = randomInteger(255);
	var r2 = randomInteger(255);
	var g2 = randomInteger(255);
	var b2 = randomInteger(255);

	let hr1 = r1.toString(16).padStart(2, "0");
	let hr2 = r2.toString(16).padStart(2, "0");
	let hg1 = g1.toString(16).padStart(2, "0");
	let hg2 = g1.toString(16).padStart(2, "0");
	let hb1 = b1.toString(16).padStart(2, "0");
	let hb2 = b1.toString(16).padStart(2, "0");

	color1.value = ("#"+hr1+hg1+hb1);
	color2.value = ("#"+hr2+hg2+hb2);

	setGradient(color1.value, color2.value);
	console.log(color1.value, color2.value);
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomColor);