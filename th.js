const MY_KEY = process.env.MY_KEY;

if (MY_KEY) {
  console.log("Successfully retrieved secret key:", MY_KEY);
  
  if (typeof document !== 'undefined') {
    document.getElementById("message").textContent = "Successfully retrieved secret key: " + MY_KEY;
  } else {
    console.log("Cannot update DOM outside of browser environment");
  }
} else {
  console.error("Failed to retrieve secret key");
  
  if (typeof document !== 'undefined') {
    document.getElementById("message").textContent = "Failed to retrieve secret key";
  } else {
    console.log("Cannot update DOM outside of browser environment");
  }
}
