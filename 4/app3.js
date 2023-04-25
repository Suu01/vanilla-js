const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);

    paintGreetings(username);
    // paintGreetings();
}

function paintGreetings(username) { 
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function paintGreetings() {
//     const username = localStorage.getItem(USERNAME_KEY);
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(username);
// }

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.innerText = `Hello ${savedUsername}`;
    // paintGreetings();
    paintGreetings(savedUsername);
}