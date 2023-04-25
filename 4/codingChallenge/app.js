const form = document.querySelector("form");
const inputSet = form.querySelector("#input-num");
const inputGuess = form.querySelector("#guess-num");
const divRes = document.querySelector("div");
const all = document.querySelector(".all");
const result = document.querySelector(".result");

function formSubmit(event) {
    event.preventDefault();

    const setValue = parseInt(inputSet.value);
    const guessValue = parseInt(inputGuess.value);
    const random = parseInt(Math.ceil(Math.random() * setValue));

    all.innerText = `You chose: ${guessValue}, the machine chose: ${random}`;

    divRes.classList.remove("hidden");

    if(random === guessValue) {
        result.innerText = `You Win!`;
    } else {
        result.innerText = `You Lost!`;
    }
}

form.addEventListener("submit", formSubmit);