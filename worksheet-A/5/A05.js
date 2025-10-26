// Get the elements we need from the page
// - keyInput is the text box where we'll type
// - lastKeySpan is where we'll show what key was pressed
const keyInput = document.getElementById('keyInput');
const lastKeySpan = document.getElementById('lastKey');

// Check if we found both elements before adding the event
if (keyInput && lastKeySpan) {
    // When any key is pressed down in the input box...
    keyInput.addEventListener('keydown', function(event) {
        // Show which key was pressed in the span
        lastKeySpan.textContent = event.key;
    });
}
