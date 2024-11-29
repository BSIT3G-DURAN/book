document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting
    document.getElementById("popup").style.display = "block"; // Show the pop-up
};

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the pop-up
}