var numSquare = 6;
var colors = generateRandomColors(numSquare);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButton = document.querySelectorAll('.mode');
for (let i = 0; i < modeButton.length; i++) {
	modeButton[i].addEventListener('click', function() {
		modeButton[0].classList.remove('selected');
		modeButton[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === 'Easy' ? (numSquare = 3) : (numSquare = 6);
		reset();
	});
}

function reset() {
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors';
	for (var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
}

resetButton.addEventListener('click', function() {
	reset();
});

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener
	squares[i].addEventListener('click', function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct';
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = 'Play Again';
		} else {
			this.style.display = 'None';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColor(color) {
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
		squares[i].style.display = 'Block';
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length); //math.random gives values (0,1)
	return colors[random];
}
function generateRandomColors(num) {
	//create an empty array
	var arr = [];
	//iterate over num time to gen colos
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}
function randomColor() {
	//pick red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
