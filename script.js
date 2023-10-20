function convertToFar() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    // Get the value from the input and convert it to a number
    const celsius = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius temperature.");
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    resultElement.textContent = fahrenheit.toFixed(2) + " °F";
}
