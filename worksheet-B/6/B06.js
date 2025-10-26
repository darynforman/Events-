// Get the button with id 'btnA'
const btnA = document.querySelector('#btnA');

// Check if button exists before adding listeners
if (!btnA) {
    console.error('Error: Button with id "btnA" not found!');
} else {
    // Add first click listener
    btnA.addEventListener('click', function() {
        console.log('First click listener activated!');
    });

    // Add second click listener
    btnA.addEventListener('click', function() {
        console.log('Second click listener activated!');
    });
}
