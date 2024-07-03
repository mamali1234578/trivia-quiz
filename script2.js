function showForm() {
    var formContainer = document.getElementById("feedbackForm");
    formContainer.style.display = "block";
}

document.getElementById("simpleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display form values (for demonstration purposes)
    alert("Thank you, " + name + "! Your feedback has been submitted.");

    // Reset the form
    document.getElementById("simpleForm").reset();

    // Hide the form after submission (optional)
    var formContainer = document.getElementById("feedbackForm");
    formContainer.style.display = "none";
});