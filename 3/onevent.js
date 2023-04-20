const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.onclick = handleTitleClick;
// html 파일의 요소에서 onclik 추가해줘도 됨
// <h1 onclik()=""></h1> -> 아마 이런 방식
// title.onclick = () => {
//     title.style.color = "blue";
// };

title.addEventListener("mouseenter", () => {
    title.innerText = "Mouse is here!"
});
// title.addEventListener("mouseenter", function() {
//     title.innerText = "Mouse is here!"
// });

title.addEventListener("mouseleave", handleMouseLeave);