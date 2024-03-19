const MY_KEY = process.env.MY_KEY;

if (MY_KEY) {
  console.log("Successfully retrieved secret key:", MY_KEY);
  // Here you can perform actions with the secret key
  // For demonstration, let's just print it out
} else {
  console.log("Failed to retrieve secret key");
}
