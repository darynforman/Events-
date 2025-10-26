// getting the form element to work with
const form = document.querySelector('#userForm');

// checking if we found the form
if (!form) {
    console.log('hey the form is missing!');
} else {
    // watching for when someone submits the form
    form.addEventListener('submit', function(event) {
        // stop the page from refreshing (learned this the hard way!)
        event.preventDefault();
        
        // grab all the form inputs
        const formData = event.target.elements;
        
        // show what was typed in the form (email and nick are the input names from HTML)
        console.log('Form data:', {
            email: formData.email.value,
            nickname: formData.nick.value
        });
    });
}
