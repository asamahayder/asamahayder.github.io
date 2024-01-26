// welcome-script.js
document.addEventListener("DOMContentLoaded", function () {
    const continueBtn = document.getElementById("continue-btn");

    if (continueBtn) {
        continueBtn.addEventListener("click", function () {
            // Redirect to the portfolio page
            window.location.href = "portfolio.html";
        });
    }
});
