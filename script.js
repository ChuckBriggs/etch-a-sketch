// set grid defaults
let gridWidth = 16;
let gridHeight = gridWidth;
let gridSize = gridWidth * gridHeight;
let currentColor = 'black';

const gridContainer = document.querySelector(".gridContainer");

function resetGrid() {
	// blow up old grid
	while (gridContainer.hasChildNodes()) {
		gridContainer.removeChild(gridContainer.firstChild);
	}

	let gridHeight = gridWidth;
	let gridSize = gridWidth * gridHeight;

	gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;

	for (i = 0; i < gridSize; i++) {
		const gridCell = document.createElement('div');
		gridCell.classList.add('gridCell');
		gridContainer.appendChild(gridCell);
	}

	// add event listener to all grid cells to change bgcolor to black on hover
	const gridCells = document.querySelectorAll('.gridCell');
	gridCells.forEach(gridCell => gridCell.addEventListener('mouseenter', drawCell));
}

function resizeGrid(newWidth) {
	gridWidth = newWidth;
	gridHeight = gridWidth;
	gridSize = gridWidth * gridHeight;	
	resetGrid();
}

function getSize() {
	let newSize=0;
	while (newSize < 1 || newSize > 100 || !Number.isInteger(newSize)) {
		newSize = prompt('enter new grid width from 1 to 100.');
		newSize = parseInt(newSize);
		resizeGrid(newSize);
	}
}

function drawCell(e) {
	switch (paletteSelector.value) {
		//if (currentColor == 'black') {
		case 'black':
			this.style.background = '#000';
			break;
		//} else if (currentColor == 'grey') {
		case 'grey':
			if (!this.style.opacity) {
				this.style.background = '#000';
				this.style.opacity = '0.1';
			} else if (this.style.opacity == '0.1') {
				this.style.opacity = '0.2';
			} else if (this.style.opacity == '0.2') {
				this.style.opacity = '0.3';
			} else if (this.style.opacity == '0.3') {
				this.style.opacity = '0.4';
			} else if (this.style.opacity == '0.4') {
				this.style.opacity = '0.5';
			} else if (this.style.opacity == '0.5') {
				this.style.opacity = '0.6';
			} else if (this.style.opacity == '0.6') {
				this.style.opacity = '0.7';
			} else if (this.style.opacity == '0.7') {
				this.style.opacity = '0.8';
			} else if (this.style.opacity == '0.8') {
				this.style.opacity = '0.9';
			} else if (this.style.opacity == '0.9') {
				this.style.opacity = '1.0';
			}
			break;
		//} else if (currentColor == 'random') {
		case 'random':
			// random color generating code shamelessly pilfered from here:
			// https://stackoverflow.com/questions/1484506/random-color-generator#comment75605597_1484514
			this.style.background = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
			break;
	}
}

document.querySelector('#btnResize').addEventListener('click', getSize);
document.querySelector('#btnClear').addEventListener('click', resetGrid);

resetGrid();

