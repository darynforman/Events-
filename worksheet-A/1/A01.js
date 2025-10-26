// Get the button element from the page
// We're looking for the button with id 'btn1'
const btn1 = document.getElementById('btn1');

// Check if we found the button before trying to use it
if (btn1) {
    // Listen for clicks on the button
    btn1.addEventListener('click', (event) => {
        // When clicked, log what type of event occurred
        // The type property tells us what kind of event happened (like 'click')
        console.log(event.type);
    });
}
