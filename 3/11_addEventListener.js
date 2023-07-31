const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
  console.log("title was clicked!");
  title.innerText = "Title is clicked!";
  title.style.color = "red";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
