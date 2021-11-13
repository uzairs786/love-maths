// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');
    // Returns the HTMLCollection of all the buttons as an array

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer()
        }
    })

    runGame("addition");
    
})

/**
 * This is a docstring
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = ""; /*empties the input box when the game starts*/
    document.getElementById("answer-box").focus(); /*sets the cursor at the box when the game starts*/

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)

    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2)
    
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2)
    } else  {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }

}

/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer Array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value); /*you use .value as it is an input element */
    let calculatedAnswer = calculateCorrectAnswer();

    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Correct!");
        incrementScore();
    } else {
        alert(`Incorrect, the correct answer is ${calculatedAnswer[0]}`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"]; /* returns the answer as [x, "addition"] */
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore; /* ++ is before the variable as it will ensure the value is added and updated before writing it back to the DOM */

}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-"
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}