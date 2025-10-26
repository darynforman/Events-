// Select elements
const toggleButton = document.querySelector('#toggle');
const targetParagraph = document.querySelector('#targetPara');

// Guard check
if (!toggleButton || !targetParagraph) {
    console.error('Required elements not found');
} else {
    toggleButton.addEventListener('click', () => {
        targetParagraph.classList.toggle('hidden');
    });
}
