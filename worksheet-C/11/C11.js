// select the toggle and fire buttons
const toggleBtn = document.getElementById('toggleBtn');
const fireBtn = document.getElementById('fireBtn');

if (toggleBtn && fireBtn) {
	// handler that runs when Fire is clicked
	function fired() {
		console.log('Fired!');
	}

	// track whether we've attached the listener
	let hasListener = false;

	// clicking toggleBtn adds/removes the listener on fireBtn
	toggleBtn.addEventListener('click', () => {
		if (!hasListener) {
			fireBtn.addEventListener('click', fired);
			hasListener = true;
			toggleBtn.textContent = 'Remove listener';
			console.log('Listener added');
		} else {
			fireBtn.removeEventListener('click', fired);
			hasListener = false;
			toggleBtn.textContent = 'Add listener';
			console.log('Listener removed');
		}
	});
} else {
	console.warn('Expected elements with ids "toggleBtn" and "fireBtn".');
}
