const MY_KEY = process.env.MY_KEY;

if (MY_KEY) {
  console.log("Successfully retrieved secret key:", MY_KEY);
  document.getElementById("message").textContent = "Successfully retrieved secret key: " + MY_KEY;
} else {
  console.error("Failed to retrieve secret key");
  document.getElementById("message").textContent = "Failed to retrieve secret key";
}
