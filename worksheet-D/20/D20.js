const titleInput = document.querySelector('#titleInput');
const titlePreview = document.querySelector('#titlePreview');

if (!titleInput || !titlePreview) {
    console.error('Elements not found');
} else {
    const defaultMessage = 'Preview will appear here';
    
    titleInput.addEventListener('input', (event) => {
        titlePreview.textContent = event.target.value.trim() || defaultMessage;
    });
    
    titleInput.addEventListener('blur', () => {
        titleInput.value = titleInput.value.trim();
    });
}
