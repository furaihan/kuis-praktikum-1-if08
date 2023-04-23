/**

Adds a value to the calculator display. If the current display value is "0", it will be removed before the new value is added.
@param {string} value - The value to be added to the display.
@returns {void}
*/
function addToDisplay(value) {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += value;
}
/**

Clears the calculator display.
@returns {void}
*/
function clearDisplay() {
  display.value = "";
}
/**

Removes the last character from the calculator display.
@returns {void}
*/
function backspace() {
  display.value = display.value.slice(0, -1);
}
/**

Changes the sign of the calculator display value (positive to negative or vice versa).
@returns {void}
*/
function negate() {
  display.value = display.value * -1;
}
/**

Calculates the value of the expression in the calculator display using the built-in JavaScript eval() function.
If an error occurs during the calculation, an "Error" message will be displayed on the calculator display.
@returns {void}
*/
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error: " + error.message;
  }
}
/**

A recursive function that toggles the "light" class on a list of elements. The function processes the elements in the classes array one by one.
When the end of the array is reached, the function stops.
@param {number} index - The current index of the class to be processed in the classes array. Defaults to 0.
@returns {void}
*/
function toggleLightMode(index = 0) {
  const classes = [
    ".body",
    ".displayInput",
    ".calculator",
    ".btnBackground",
    ".toggleBtn",
    ".toggleBtn .fa-sun",
    ".toggleBtn .fa-moon",
    ".jam",
    ".utility",
    ".numBtn",
    ".cyanBtn",
    ".opBtn",
  ];
  if (index === classes.length) {
    return; // Base case: exit when all classes have been processed
  }

  const elements = document.querySelectorAll(classes[index]);

  elements.forEach((element) => {
    if (element.classList.contains("light")) {
      element.classList.remove("light");
    } else {
      element.classList.add("light");
    }
  });

  toggleLightMode(index + 1); // Recursive call to process next class
}
