const guessForm = document.getElementById("js-guess");
const guessInput = guessForm.querySelector("input");
const selectInput = document.getElementById("maxNumber");
const result = document.getElementById("js-result");

function handleGuessSubmit(e) {
    e.preventDefault();
    const guess = guessInput.value;
    const select = selectInput.value;
    const resultMessage = result.querySelector("span:first-child");
    const score = result.querySelector("span:last-child");
    if (select === "" || guess === "") {
        resultMessage.innerText = "";
        score.style.color = "red";
        score.innerHTML = "<strong>Please select Number!</strong>"
        return;
    }
    const selectNum = parseInt(select, 10);
    const guessNum = parseInt(guess, 10);

    const machineChose = Math.ceil(Math.random() * selectNum);

    resultMessage.innerText = `You chose: ${guessNum}, the machine chose: ${machineChose}`;
    score.style.color = "black";
    guessNum === machineChose
    ? (score.innerHTML = "<strong>You won!</strong>")
    : (score.innerHTML = "<strong>You lost!</strong>");
}

guessForm.addEventListener("submit", handleGuessSubmit);
