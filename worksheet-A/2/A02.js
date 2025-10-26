// Get the button element from the page
// We're looking for the button with id 'btn2'
const btn2 = document.getElementById('btn2');

// Check if we found the button before trying to use it
if (btn2) {
    // Listen for clicks on the button
    btn2.addEventListener('click', (event) => {
        // When clicked, get the button's text and log it
        // The target property tells us which element was clicked
        console.log(event.target.textContent);
    });
}
