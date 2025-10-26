// select the button that should only act once
const onceBtn = document.getElementById('onceBtn');

if (onceBtn) {
	// listener uses the { once: true } option so it auto-removes
	onceBtn.addEventListener('click', function handler() {
		console.log('Clicked once!');
	}, { once: true });
} else {
	console.warn('Expected element with id "onceBtn".');
}
