document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;

        
        alert(`Name: ${name}\nEmail: ${email}\nComment: ${comment}`);
    });
})