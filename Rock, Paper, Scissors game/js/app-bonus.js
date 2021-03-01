const counter = document.querySelector('.counter');
const userField = document.querySelector('.user-field');
const compField = document.querySelector('.comp-field');
const result = document.querySelector('.result');
const play = document.querySelector('.play');
const chose = document.querySelector('.chose');
const userPick = document.querySelector('#user-pick');
const compPick = document.querySelector('#comp-pick');
const conclusion = document.querySelector('.conclusion');
const unActive = document.querySelector('.unactive');
const win = document.querySelector('.win');

let userStep;
let compStep;
let count = 0;

function choiceUser(e) {
    const target = e.target;
    if (target.classList.contains('field')) {
        userStep = target.dataset.field;
        userPick.classList.add(userStep);
        choiceComp();
    };
    conclusion.classList.remove('hide');
    chose.classList.add('hide');
}

function choiceComp() {
    unActive.classList.add('unactive');
    const randomNumber = Math.floor(Math.random() * 5);
    const compFields = compField.querySelectorAll('.field');

    setTimeout(() => {
        compStep = compFields[randomNumber].dataset.field;
        compPick.classList.add(compStep);
        winner()
    }, 700);

}

function winner() {
    unActive.classList.remove('unactive');
    play.classList.remove('hide');
    const combination = userStep + compStep;

    switch(combination) {
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
        case 'lizardlizard':
        case 'spockspock':
            result.innerText = 'DRAW';
            break;
        case 'rockscissors':
        case 'rocklizard':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'paperspock':
        case 'paperrock':
        case 'lizardspock':
        case 'lizardpaper':
        case 'spockscissors':
        case 'spockrock':
            result.innerText = 'YOU WIN';
            userPick.classList.add('win');
            count++;
            counter.innerText = count;
            break;
        case 'scissorsrock':
        case 'lizardrock':
        case 'paperscissors':
        case 'lizardscissors':
        case 'spockpaper':
        case 'rockpaper':
        case 'spocklizard':
        case 'paperlizard':
        case 'scissorsspock':
        case 'rockspock':
            result.innerText = 'YOU LOSE';
            compPick.classList.add('win');
            count--;
            counter.innerText = count;
            break;
                
    }
}

function playGame() {
    result.innerText = '';
    userPick.className = "";
    compPick.className = "";
    chose.classList.remove('hide');
    conclusion.classList.add('hide');
    play.classList.add('hide')
}

play.addEventListener('click', playGame);
userField.addEventListener('click', choiceUser);
