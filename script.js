function displayInput() {
    // Escape user input before displaying it to prevent XSS
    const userInput = document.getElementById("user_input").value;
    const escapedInput = userInput.replace(/<[^>]*>/g, "&lt;script&gt;");  // Escape potentially harmful characters
    document.getElementById("output").innerHTML = escapedInput;
  }
  