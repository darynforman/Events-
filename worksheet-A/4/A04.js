// Get the elements we need from the page
// - mouseBox is the area where we'll track mouse movement
// - coordsSpan is where we'll show the coordinates
const mouseBox = document.getElementById('mouseBox');
const coordsSpan = document.getElementById('coords');

// Check if we found both elements before adding the event
if (mouseBox && coordsSpan) {
    // When the mouse moves inside the box...
    mouseBox.addEventListener('mousemove', function(event) {
        // Get the mouse position relative to the box
        const x = event.offsetX;  // X position from the left edge of the box
        const y = event.offsetY;  // Y position from the top edge of the box
        
        // Show the coordinates in the span
        coordsSpan.textContent = `x=${x}, y=${y}`;
    });
}
