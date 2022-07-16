'use strict'

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = `${score}`;
document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highScore}`;

document.querySelector('.check').addEventListener('click', function () {

    const guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber) {

        document.querySelector('.message').textContent = 'Please enter a value';

    }

    else if (guessNumber === secretNumber) {

        document.querySelector('.message').textContent = 'You guessed it right';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        highScore = score;
        document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${score}`;


    }
    else if (guessNumber > secretNumber) {

        if (score !== 0) {

            document.querySelector('.message').textContent = 'Please enter a smaller value';
            score--;
            document.querySelector('.score').textContent = `${score}`;
        }

        else {

            document.querySelector('.message').textContent = 'You failed , Dear Sir';
            document.querySelector('body').style.backgroundColor = 'red';

        }

    }

    else if (guessNumber < secretNumber) {

        if (score !== 0) {

            document.querySelector('.message').textContent = 'Please enter a bigger value';
            score--;
            document.querySelector('.score').textContent = `${score}`;

        }

        else {
            document.querySelector('.message').textContent = 'You failed , Dear Sir';
        }
    }
})

let resetGame = document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    document.querySelector('.message').textContent = 'Start Guessing ...';
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = `${score}`
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';

})


