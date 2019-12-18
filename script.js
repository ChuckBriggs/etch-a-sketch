// set grid defaults
let gridWidth = 4;
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
		/*
	} else if (currentColor == 'paletteGrey') {
		if (this.style.asdf == 'f') {
			this.style.background = '#555';
			this.style.asdf = '5';
		}
		if (this.style.background == '#fff') {
			this.style.background = '#abc';
		} else if (this.style.background == '#ddd') {
			this.style.background = '#bbb';
		} else if (this.style.background == '#bbb') {
			this.style.background = '#999';
		} else if (this.style.background == '#999') {
			this.style.background = '#777';
		} else if (this.style.background == '#777') {
			this.style.background = '#555';
		} else if (this.style.background == '#555') {
			this.style.background = '#333';
		} else if (this.style.background == '#333') {
			this.style.background = '#111';
		} else if (this.style.background == '#111') {
			this.style.background = '#000';
		}
		*/
	} else if (currentColor == 'paletteRandom') {
		// random color generating code shamelessly pilfered from here:
		// https://stackoverflow.com/questions/1484506/random-color-generator#comment75605597_1484514
		this.style.background = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
	}
}

resetGrid();


