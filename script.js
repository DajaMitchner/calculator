const screen = document.querySelector('#screen')
const numberButtons = document.querySelectorAll('.button');
const clear = document.querySelector('.clear')
const zero = document.querySelector('.zero')
const operators = document.querySelector('.operator')
const equal = document.querySelector('.equal')
new cursor()

function inputChange(event) {
    const targetEl = event.target;
    const buttonText = targetEl.innerHTML;
    screen.innerText += buttonText;
}

function addAllEventListeners(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerText !== '=')
            arr[i].addEventListener('click', inputChange);
    }
}

addAllEventListeners(numberButtons);
function deleteBox() {
    screen.innerText = ' '
}
clear.addEventListener('click', deleteBox)

function stringMath(stringnum) {
    for (let i = 0; i < stringnum.length; i++) {
        if (stringnum[i] === '+') {
            let add = stringnum.split('+')
            return parseInt(add[0]) + parseInt(add[1])
        }
        else if (stringnum[i] === '-') {
            let sub = stringnum.split('-')
            return parseInt(sub[0]) - parseInt(sub[1])
        }
        else if (stringnum[i] === '/') {
            let div = stringnum.split('/')
            return parseInt(div[0]) / parseInt(div[1])
        }
        else if (stringnum[i] === '*') {
            let mult = stringnum.split('*')
            return parseInt(mult[0]) * parseInt(mult[1])
        }
    }
}

function equalSign() {
screen.innerText=stringMath(screen.innerText)
}
equal.addEventListener('click', equalSign)

