const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

let gridWidth = 16;
let gridHeight = gridWidth;
let gridSize = gridWidth * gridHeight;

function resetGrid() {
	for (i = 0; i < gridSize; i++) {
		const gridCell = document.createElement('div');
		gridCell.classList.add('gridCell');
		grid.appendChild(gridCell);
	}
}

resetGrid();

// add event listener to all grid cells to change bgcolor to black on hover
const gridCells = document.querySelectorAll('.gridCell');
gridCells.forEach(gridCell => gridCell.addEventListener('mouseenter', drawColor));

//
//grid.textContent = 'I\'m gonna be a grid!';
//
//function reset() {
//}
//
function drawColor(e) {
	this.style.background = '#000';
}
//function removeTransition(e) {
//	if (e.propertyName !== 'transform') return; // skip if it's not a transform
//	this.classList.remove('clicked');
//}
//
