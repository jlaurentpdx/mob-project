// import functions

// reference needed DOM elements
const dir1 = document.getElementById('dir-1');
const dir1Input = document.getElementById('dir-1-input');

const dir2 = document.getElementById('dir-2');
const dir2Input = document.getElementById('dir-2-input');

const noun1 = document.getElementById('noun-1');
const noun1Input = document.getElementById('noun-1-input');

const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const number1Input = document.getElementById('number-1-input');

const revealButton = document.getElementById('reveal-button');

// set event listeners
revealButton.addEventListener('click', () => {
    dir1.textContent = dir1Input.value;
    dir2.textContent = dir2Input.value;
    noun1.textContent = noun1Input.value;
    number1.textContent = number1Input.value;
    number2.textContent = number1Input.value;
});
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
