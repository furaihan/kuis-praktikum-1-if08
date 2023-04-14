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
    document.querySelector(".btnBackground").classList.remove("light");
    document.querySelector(".toggleBtn").classList.remove("light");
    document.querySelector(".toggleBtn .fa-sun").classList.remove("light");
    document.querySelector(".toggleBtn .fa-moon").classList.remove("light");
    document.querySelector(".jam").classList.remove("light");
    document.querySelector(".utility").classList.remove("light");
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
    document.querySelector(".btnBackground").classList.add("light");
    document.querySelector(".toggleBtn").classList.add("light");
    document.querySelector(".fa-sun").classList.add("light");
    document.querySelector(".fa-moon").classList.add("light");
    document.querySelector(".jam").classList.add("light");
    document.querySelector(".utility").classList.add("light");
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
