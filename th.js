// Validation function
function validateData(data) {
  const secret = window.MY_KEY; // Access the secret from window.MY_KEY
  // Perform validation using the secret
  if (data === secret) {
    return true;
  } else {
    return false;
  }
}

// Export the validateData function
export { validateData };
