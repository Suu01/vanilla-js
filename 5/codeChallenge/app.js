const result = document.querySelector("h2.js-clock");

function calDay() {
    const date = new Date();
    const christmasEve = new Date("2023-12-24");

    // 밀리세컨드 단위 출력 (1초는 1*1000)
    const remain = christmasEve - date;

    const remainDay = String(Math.floor(remain / (1000 * 60 * 60 * 24))).padStart(3, "0");
    const remainHours = String(Math.floor(remain / (1000 * 60 * 60) % 24)).padStart(2, "0");
    const remainMinutes = String(Math.floor(remain / (1000 * 60) % 60)).padStart(2, "0");
    const remainSeconds = String(Math.floor(remain / 1000 % 60)).padStart(2, "0");

    result.innerText = `${remainDay}d ${remainHours}h ${remainMinutes}m ${remainSeconds}s`;
}

calDay();
setInterval(calDay, 1000);