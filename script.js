const result = document.querySelector('.result')
const humanSocre = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineSocreNumber = 0

const playHuman = (humanChoice) => {
    playThegame(humanChoice, playMachine())
}

function playMachine() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNuber = Math.floor(Math.random() * 3)

    return choices[randomNuber]
}

const playThegame = (human, machine) => {
    console.log('Humano:' + human + 'maquina:' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanSocre.innerHTML = humanScoreNumber
       result.innerHTML = 'Voce ganhou!'
    } else {
        machineSocreNumber++
        machineScore.innerHTML = machineSocreNumber
        result.innerHTML = 'Voce perdeu!'
    }
}