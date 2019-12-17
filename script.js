const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

let gridWidth = 10;
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

//
//grid.textContent = 'I\'m gonna be a grid!';
//
//function reset() {
//}
//
//function removeTransition(e) {
//	if (e.propertyName !== 'transform') return; // skip if it's not a transform
//	this.classList.remove('clicked');
//}
//
