// select the typing field, display span, and control buttons
const typeField = document.getElementById('typeField');
const countSpan = document.getElementById('count');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

if (typeField && countSpan && startBtn && stopBtn) {
	// counter for keys typed
	let counter = 0;

	// named handler that increments and updates the span
	function handleKeydown(e) {
		counter++;
		countSpan.textContent = counter;
	}

	let attached = false;

	// attach listener (guard against double-attach)
	startBtn.addEventListener('click', () => {
		if (!attached) {
			typeField.addEventListener('keydown', handleKeydown);
			attached = true;
			console.log('Keydown listener attached');
		} else {
			console.log('Listener already attached');
		}
	});

	// remove listener
	stopBtn.addEventListener('click', () => {
		if (attached) {
			typeField.removeEventListener('keydown', handleKeydown);
			attached = false;
			console.log('Keydown listener removed');
		} else {
			console.log('No listener to remove');
		}
	});
} else {
	console.warn('Expected #typeField, #count, #start and #stop elements.');
}
