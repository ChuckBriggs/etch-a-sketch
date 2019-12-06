function reset() {
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; // skip if it's not a transform
	this.classList.remove('clicked');
}

