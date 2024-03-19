// Check if the code is running in a browser environment
if (typeof window !== 'undefined') {
  // Access the secret key stored in a global variable
  const MY_KEY = window.MY_KEY;

  if (MY_KEY) {
    console.log("Successfully retrieved secret key:", MY_KEY);
    document.getElementById("message").textContent = "Successfully retrieved secret key: " + MY_KEY;
  } else {
    console.error("Failed to retrieve secret key");
    document.getElementById("message").textContent = "Failed to retrieve secret key";
  }
} else {
  // Handle the case when the code is running in a non-browser environment (like Node.js)
  console.log("Running in a non-browser environment");
}
