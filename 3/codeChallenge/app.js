const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h2 = document.querySelector("h2");

const superEventHandler = {
    'enter' : () => {
        h2.innerText = 'The mouse is here!';
        h2.style.color = colors[0];
    },
    'leave' : () => {
        h2.innerText = 'The mouse is gone!';
        h2.style.color = colors[1];
    },
    'resize' : () => {
        h2.innerText = 'You just Resized!';
        h2.style.color = colors[2];
    },
    'context' : () => {
        h2.innerText = 'That was a right click!';
        h2.style.color = colors[4];
    },
};

// console.dir(h2);

h2.addEventListener("mouseenter", superEventHandler.enter);
h2.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
h2.addEventListener("contextmenu", superEventHandler.context);