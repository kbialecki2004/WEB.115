document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const inputField = document.getElementById('inputField');

  // Create message elements for feedback
  const errorMessage = document.createElement('p');
  errorMessage.style.color = 'red';
  const successMessage = document.createElement('p');
  successMessage.style.color = 'green';
  
  form.appendChild(errorMessage);
  form.appendChild(successMessage);

  form.addEventListener('submit', (event) => {
      // Clear previous messages
      errorMessage.textContent = '';
      successMessage.textContent = '';

      // Validate input
      if (!validateInput(inputField.value)) {
          // Prevent form submission
          event.preventDefault();
          errorMessage.textContent = 'Input must be alphanumeric.';
      } else {
          // Display success message
          successMessage.textContent = 'Form submitted successfully!';
          // Optionally prevent actual form submission for demonstration
          event.preventDefault(); // Remove this line to allow actual submission
      }
  });

  function validateInput(value) {
      // Regular expression for alphanumeric validation
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      return alphanumericRegex.test(value);
  }
});