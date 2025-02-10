// Function to handle collapsible sections
function setupCollapsibleSections() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

// Function to handle filtering records
function setupFilterButton() {
    document.getElementById("filter-button").addEventListener("click", function() {
        filterRecords();
    });
}

// Function to filter records based on the selected criteria
function filterRecords() {
    var month = document.getElementById('filter-month').value;
    var startDate = document.getElementById('filter-start-date').value;
    var endDate = document.getElementById('filter-end-date').value;
    // Implement filtering logic here
}

// Initialize the page when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    setupFilterButton();
});