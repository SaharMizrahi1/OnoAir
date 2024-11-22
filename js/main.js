// Function to toggle visible sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initialize the app by showing the Manage Flights section
document.addEventListener("DOMContentLoaded", () => {
    showSection('welcome');})