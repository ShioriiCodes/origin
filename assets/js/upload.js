document.getElementById('upload-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const bookTitle = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookFile = document.getElementById('book-file').files[0];

    // Basic validation
    if (bookFile) {
        // Simulate the upload process
        // In a real application, you would send the file to your server here
        document.getElementById('upload-message').textContent = `Book "${bookTitle}" by ${bookAuthor} has been uploaded successfully!`;
    } else {
        document.getElementById('upload-message').textContent = 'Please select a file to upload.';
    }
    // Clear the form
    this.reset();
});
