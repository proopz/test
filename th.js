const MY_KEY = process.env.MY_KEY;

if (MY_KEY) {
  console.log("Successfully retrieved secret key:", MY_KEY);
  document.write("<p>Successfully retrieved secret key: " + MY_KEY + "</p>");
} else {
  console.error("Failed to retrieve secret key");
  document.write("<p>Failed to retrieve secret key</p>");
}
