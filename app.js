let display = document.getElementById('display');

function addToDisplay(value) {
    if (display.value === '0'){
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function negate(){
    display.value = display.value * -1;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}