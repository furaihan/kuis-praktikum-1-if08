let display = document.getElementById("display");

function addToDisplay(value) {
  if (display.value === "0") {
    display.value = "";
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function negate() {
  display.value = display.value * -1;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function toggleLightMode() {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.querySelector(".displayInput").classList.remove("light");
    document.querySelector(".calculator").classList.remove("light");
    document.querySelectorAll(".numBtn").forEach((item) => {
      item.classList.remove("light");
    });
    document.querySelectorAll(".cyanBtn").forEach((item) => {
      item.classList.remove("light");
    });
    document.querySelectorAll(".opBtn").forEach((item) => {
      item.classList.remove("light");
    });
  } else {
    document.body.classList.add("light");
    document.querySelector(".displayInput").classList.add("light");
    document.querySelector(".calculator").classList.add("light");
    document.querySelectorAll(".numBtn").forEach((item) => {
      item.classList.add("light");
    });
    document.querySelectorAll(".cyanBtn").forEach((item) => {
      item.classList.add("light");
    });
    document.querySelectorAll(".opBtn").forEach((item) => {
      item.classList.add("light");
    });
  }
  document.body.classList.forEach((item) => {
    console.log(item);
  });
}
