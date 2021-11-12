// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    // Returns the HTMLCollection of all the buttons as an array

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === 'submit') {
                alert('You clicked submit!')
            } else {
                let gameType = this.getAttribute("data-type")
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displayMultiplyQuestion() {

}