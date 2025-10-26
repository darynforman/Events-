const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const valueDisplay = document.querySelector('#value');

if (!plusButton || !minusButton || !valueDisplay) {
    console.error('Required elements not found');
} else {
    let counter = 0;
    
    const updateDisplay = () => {
        valueDisplay.textContent = counter;
    };
    
    plusButton.addEventListener('click', () => {
        counter++;
        updateDisplay();
    });
    
    minusButton.addEventListener('click', () => {
        counter--;
        updateDisplay();
    });
    
    updateDisplay();
}
