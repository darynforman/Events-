// grab the input box and the span where we'll show the length
const nameInput = document.querySelector('#name');
const lengthSpan = document.querySelector('#len');

// make sure we found both elements
if (!nameInput || !lengthSpan) {
    console.log('cant find the input or span :(');
} else {
    // watch for changes in the input box
    nameInput.addEventListener('input', function(event) {
        // get how many characters are in the input and show it
        lengthSpan.textContent = event.target.value.length;
    });
}
