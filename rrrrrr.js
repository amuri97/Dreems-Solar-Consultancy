// JavaScript to handle website interactions

// Wait for the DOM to fully load before executing any functions
document.addEventListener('DOMContentLoaded', () => {
    createHeroSection();
    createProductHighlights();
    createMissionStatement();
    createEducationalSection();
    createCustomerStories();
    createContactSection();
});

// Function to handle Hero Section
function createHeroSection() {
    // Select the button in the hero section
    const heroButton = document.querySelector('.hero button');
    // Add an event listener to the button to trigger the exploreSolutions function when clicked
    heroButton.addEventListener('click', exploreSolutions);
}

// Function to handle Explore Solutions button
function exploreSolutions() {
    // Display an alert when the explore solutions button is clicked
    alert('Explore our green energy solutions to create a sustainable future!');
}

// Function to handle Product Highlights Section
function createProductHighlights() {
    // Select all product elements
    const products = document.querySelectorAll('.product');
    // Iterate through each product element and add an event listener for clicks
    products.forEach(product => {
        product.addEventListener('click', () => {
            // Display an alert showing the product name when it is clicked
            alert(`${product.querySelector('h3').textContent} selected! Learn more about this product.`);
        });
    });
}

// Function to handle Mission Statement Section
function createMissionStatement() {
    // Any JavaScript needed for the mission section can be added here
    // Currently, this section does not require specific JavaScript functionality
}

// Function to handle Educational Section
function createEducationalSection() {
    // Any JavaScript needed for the educational section can be added here
    // Currently, this section does not require specific JavaScript functionality
}

// Function to handle Customer Stories Section
function createCustomerStories() {
    // Select all customer story elements
    const stories = document.querySelectorAll('.story');
    // Iterate through each story element and add an event listener for clicks
    stories.forEach(story => {
        story.addEventListener('click', () => {
            // Display an alert showing the story content when it is clicked
            alert(`Read more about how ${story.querySelector('p').textContent}`);
        });
    });
}

// Function to handle Contact Section
function createContactSection() {
    // Select the button in the contact section
    const contactButton = document.querySelector('.contact button.cta-button');
    // Add an event listener to the button to trigger the requestConsultation function when clicked
    contactButton.addEventListener('click', requestConsultation);

    // Select the contact form
    const contactForm = document.querySelector('.contact-form');
    // Add an event listener to handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

// Function to handle Request a Consultation button
function requestConsultation() {
    // Display an alert thanking the user for their interest
    alert('Thank you for your interest! We will contact you soon for a consultation.');
}








// JavaScript for the Customer Stories Carousel

function scrollCarousel(direction) {
    const carousel = document.querySelector('.stories-carousel');
    const scrollAmount = 300; // Adjust this to control how much to scroll
    
    if (direction === 'left') {
        carousel.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        carousel.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Optional: Auto-scroll functionality
let autoScrollInterval;
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        scrollCarousel('right');
    }, 5000); // Adjust the interval time as needed
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Start auto-scroll when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startAutoScroll();

    // Pause auto-scroll on mouse enter and resume on mouse leave
    const carousel = document.querySelector('.stories-carousel');
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
});






// Function to handle Contact Form Submission (Newly Added)
function handleContactFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve form values
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Display an alert or process the form data as needed
    alert(`Thank you, ${name}! Your message has been received. We will get back to you at ${email}.`);

    // Optionally, you could add functionality here to send the data to a server or use an API
}