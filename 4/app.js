// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // console.dir(loginInput);
    // console.log("click");
    // console.log(loginInput.value);

    // if (username === "") {
    //     alert("Please write your name");
    //     // console.log("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long");
    // }
    event.preventDefault();
    // console.log(event);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginButton.addEventListener("click", onLoginBtnClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`;
}