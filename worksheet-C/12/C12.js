// select the create button and the area where new buttons go
const makeBtn = document.getElementById('makeBtn');
const btnArea = document.getElementById('btnArea');

if (makeBtn && btnArea) {
	// counter for naming new buttons
	let counter = 1;

	makeBtn.addEventListener('click', () => {
		const b = document.createElement('button');
		b.textContent = `New ${counter}`;
		// each new button logs its own label when clicked
		b.addEventListener('click', () => {
			console.log(b.textContent);
		});
		btnArea.appendChild(b);
		counter++;
	});
} else {
	console.warn('Expected elements with ids "makeBtn" and "btnArea".');
}


