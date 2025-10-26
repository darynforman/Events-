// getting the box we want to make interactive
const hoverBox = document.querySelector('#hoverBox');

// making sure we found the box
if (!hoverBox) {
    console.log('couldnt find the hover box!');
} else {
    // when mouse goes over the box
    hoverBox.addEventListener('mouseenter', function() {
        // make it yellow (or whatever color looks cool)
        this.style.backgroundColor = 'yellow';
    });

    // when mouse leaves the box
    hoverBox.addEventListener('mouseleave', function() {
        // back to normal color
        this.style.backgroundColor = '';
    });
}
