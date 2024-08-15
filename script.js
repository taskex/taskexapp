// script.js

document.getElementById("signup-button").addEventListener("click", function() {
    // Hide the sign-up form
    document.getElementById("signup-form").style.display = "none";
    // Show the survey form
    document.getElementById("survey-form").style.display = "block";
});

document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect user responses
    const role = document.getElementById("role").value;
    const industry = document.getElementById("industry").value;
    const experience = document.getElementById("experience").value;

    // Customize user experience based on role
    if (role === "freelancer") {
        alert("Welcome to your Freelancer Dashboard!");
        // Logic for freelancer dashboard setup
    } else if (role === "client") {
        alert("Welcome to your Client Dashboard!");
        // Logic for client dashboard setup
    } else {
        alert("Welcome to your Hybrid Dashboard!");
        // Logic for hybrid dashboard setup
    }

    // Redirect to dashboard or display relevant dashboard content
    // For now, just an alert to simulate
});

