const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // 첫 번째
    // if(h1.style.color === "blue") {
    //     h1.style.color = "tomato";
    // } else {
    //     h1.style.color = "blue";
    // }

    // 두 번째
    // const currentColor = h1.style.color;
    // let newColor;

    // if (currentColor === "blue") {
    // newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;

    // 세 번째
    // const clickedClass = "clicked sexy-font";
    // if (h1.className === clickedClass) {
    //     h1.className = "";
    // } else {
    //     h1.className = clickedClass;
    // }

    // 네 번째
    // const clickedClass = "clicked sexy-font";
    // if (h1.className === clickedClass) {
    //     h1.className = "";
    // } else {
    //     h1.className = clickedClass;
    // }

    // 다섯번째
    // const clickedClass = "clicked";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    // 여섯 번째
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);