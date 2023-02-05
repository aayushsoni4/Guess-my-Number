'use strict';
let num = Math.trunc(Math.random() * 30) + 1;
let score = 10;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number');
    }
    if (guess === num) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        let highscore = Number(document.querySelector('.highscore').textContent);
        document.querySelector('.highscore').textContent = Math.max(score, highscore);
        displayMessage('Correct Number 🎉');
        document.querySelector('.number').textContent = num;
    }
    else {
        if (score > 1) {
            displayMessage(guess > num ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game.');
            document.querySelector('h1').textContent = "Number was";
            document.querySelector('body').style.backgroundColor = "black"
            document.querySelector('.number').textContent = num;
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    num = Math.trunc(Math.random() * 30) + 1;
    document.querySelector('.score').textContent = 10;
    score = 10;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
})
