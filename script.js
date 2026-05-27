// Menu Page Button
const addButtons = document.querySelectorAll('.add-btn');
// querySelectorAll =  "Add +" Button

addButtons.forEach(button => {
    // forEach =  Button
    button.addEventListener('click', function() {
        const coffeeName = this.parentElement.parentElement.querySelector('h3').innerText;
        // which Coffee Button Click 
        alert(coffeeName + ' added to cart! ☕');
        this.innerText = 'Added ✓';
        // Button Text "Added" 
    });
});


// Contact Form Submit
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Page Refresh block
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
       
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        
        alert('Thank you ' + name + '! Your message is sent. ☕');
        contactForm.reset(); // Form Clear
    });
}