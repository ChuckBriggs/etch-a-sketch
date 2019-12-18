// set grid defaults
let gridWidth = 16;
let gridHeight = gridWidth;
let gridSize = gridWidth * gridHeight;
let currentColor = 'paletteBlack';

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
	return 0;
}

function drawCell(e) {
	if (currentColor == 'paletteBlack') {
		this.style.background = '#000';
	} else if (currentColor == 'paletteGrey') {
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
	} else if (currentColor == 'paletteRandom') {
		// random color generating code shamelessly pilfered from here:
		// https://stackoverflow.com/questions/1484506/random-color-generator#comment75605597_1484514
		this.style.background = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
	}
}

resetGrid();


