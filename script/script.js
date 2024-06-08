document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('sendMessage-btn');
    var modal = document.getElementById("resultModal");
    var span = document.getElementsByClassName("close")[0];
    var cancelBtn = document.getElementById('cancel-btn');
    var saveBtn = document.getElementById('save-btn');
    var form = document.getElementById('contact-form');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var subject = document.querySelector('input[name="subject"]').value;
        var message = document.querySelector('textarea[name="message"]').value;

        // Create result message
        var resultMessage = "<h3>Contact Us Details:</h3>" +
            "<p><strong>Name:</strong> " + name + "</p>" +
            "<p><strong>Email:</strong> " + email + "</p>" +
            "<p><strong>Subject:</strong> " + subject + "</p>" +
            "<p><strong>Message:</strong> " + message + "</p>";

        // Display result message in modal
        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = resultMessage;

        // Show the modal
        modal.style.display = "block";
    });

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle cancel button click
    cancelBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

   // Handle save button click
saveBtn.addEventListener('click', function() {
Swal.fire({
    title: '🌝Data Berhasil Disimpan!✅',
    text: 'Terima kasih atas kontribusinya.✨',
    icon: 'success',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
}).then((result) => {
    if (result.isConfirmed) {
        modal.style.display = "none";
        form.submit();
    }
});
});

});







