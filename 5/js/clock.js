const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // setInterval만 사용하면 1초 후에 시계가 뜨기 시작하기 때문에 웹사이트가 load 되자마자 함수를 실행하고 그 후에 setInterval()로 매초마다 다시 실행하게 함
setInterval(getClock, 1000);

// setTimeout(getClock, 5000);