$('.toggle-pars').click( () => $('p').toggle(3000) );

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( btn => btn.addEventListener('click', digitPressed) );
function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.opers button');
opers.forEach( btn => btn.addEventListener('click', operPressed) );
function operPressed(e) {
    console.log('Entered ', e.target.innerText)
    e.preventDefault();
    if (isOperetion(display.value[display.value.length - 1])) {
        display.value = display.value.slice(0, -1) + e.target.innerText;
    } else {
        display.value += e.target.innerText;
    }
}
function isOperetion(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}