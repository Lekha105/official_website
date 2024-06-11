

document.addEventListener('DOMContentLoaded', () => {
    const customAlert = document.getElementById('custom-alert');
    const customAlertMessage = document.getElementById('custom-alert-message');
    const customAlertClose = document.getElementById('custom-alert-close');

    // Set the message for the custom alert
    customAlertMessage.textContent = "Check out our latest updates and offers.";

    // Show the custom alert
    customAlert.style.display = 'flex';

    // Close the custom alert when the close button is clicked
    customAlertClose.addEventListener('click', () => {
        customAlert.style.display = 'none';
    });
});

