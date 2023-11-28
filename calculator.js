let displayVal = '';

function clearDisplay() {
    displayVal = '';
    document.getElementById('display').value = displayVal;
}

function appendToDisplay(val) {
    displayVal += val;
    document.getElementById('display').value = displayVal;
}

function calculate() {
    try {
        displayVal = eval(displayVal);
        document.getElementById('display').value = displayVal;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
