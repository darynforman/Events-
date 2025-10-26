// Get the button element from the page
// We're looking for the button with id 'btn3'
const btn3 = document.getElementById('btn3');

// Check if we found the button before trying to use it
if (btn3) {
    // Listen for double-clicks on the button
    btn3.addEventListener('dblclick', (event) => {
        // When double-clicked, change the button's text
        event.currentTarget.textContent = 'Nice double click!';
    });
}
