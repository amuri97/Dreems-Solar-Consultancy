// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    // Simulating email sending (you'll need backend integration for actual functionality)
    alert(`Thank you, ${name}! Your message has been sent.`);
});