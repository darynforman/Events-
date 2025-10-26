const colorPicker = document.querySelector('#color');
const colorBox = document.querySelector('#colorBox');

if (!colorPicker || !colorBox) {
    console.error('Elements not found');
} else {
    colorPicker.addEventListener('input', (event) => {
        colorBox.style.backgroundColor = event.target.value;
    });
    
    // Set initial color
    colorBox.style.backgroundColor = colorPicker.value;
}
