const swapButton = document.querySelector('#swap');
const photoImage = document.querySelector('#photo');

if (!swapButton || !photoImage) {
    console.error('Elements not found');
} else {
    let imageCounter = 1;
    
    swapButton.addEventListener('click', () => {
        imageCounter++;
        photoImage.src = `https://picsum.photos/120?random=${imageCounter}`;
    });
    
    photoImage.addEventListener('error', () => {
        photoImage.alt = 'Failed to load image';
    });
}
