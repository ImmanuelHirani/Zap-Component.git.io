// Get the treatment content wrapper and treatment items
const treatmentContent = document.getElementById('treatment-content');
const treatmentItems = treatmentContent.querySelectorAll('.card-wrapper');

// Get the pagination buttons and current page elements
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const currentPageElements = document.querySelectorAll('.current-page');

// Define the current page and items per page
let currentPage = 1;
const itemsPerPage = 6; // Adjust this number as needed

// Function to show the items for the current page
function showItemsForPage(page) {
  treatmentItems.forEach((item, index) => {
    if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Function to update the current page elements
function updateCurrentPageElements() {
  currentPageElements.forEach((element) => {
    element.textContent = currentPage;
  });
}

// Initialize the page
showItemsForPage(currentPage);

// Update the current page elements
updateCurrentPageElements();

// Handle next button click
nextButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(treatmentItems.length / itemsPerPage)) {
    currentPage++;
    showItemsForPage(currentPage);
    updateCurrentPageElements();
  }
});

// Handle previous button click
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showItemsForPage(currentPage);
    updateCurrentPageElements();
  }
});


