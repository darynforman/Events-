// got all the buttons with 'multi' class using querySelectorAll
const buttons = document.querySelectorAll('.multi');

// made a function to show which button was clicked
function handleClick() {
    // this.textContent gets the text inside the button that was clicked
    console.log(this.textContent);
}

// checking if we found any buttons
if (buttons.length === 0) {
    console.log('oops, no buttons found!');
} else {
    // loop through each button and add the click handler
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}
