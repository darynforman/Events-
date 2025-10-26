// select the add button and the list
const addItem = document.getElementById('addItem');
const items = document.getElementById('items');

if (addItem && items) {
	// simple counter for list items
	let n = 1;

	addItem.addEventListener('click', () => {
		const li = document.createElement('li');
		li.textContent = `Item ${n}`;
		// clicking the li logs its text
		li.addEventListener('click', () => {
			console.log(li.textContent);
		});
		items.appendChild(li);
		n++;
	});
} else {
	console.warn('Expected elements with ids "addItem" and "items".');
}


