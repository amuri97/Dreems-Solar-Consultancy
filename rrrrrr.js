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
    const contactButton = document.querySelector('.contact button');
    // Add an event listener to the button to trigger the requestConsultation function when clicked
    contactButton.addEventListener('click', requestConsultation);
}

// Function to handle Request a Consultation button
function requestConsultation() {
    // Display an alert thanking the user for their interest
    alert('Thank you for your interest! We will contact you soon for a consultation.');
}
