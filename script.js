let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendCharacter(character) {
    if (display.innerText === '0' && character !== '.') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*').replace('−', '-'));
    } catch {
        display.innerText = 'Error';
    }
}
