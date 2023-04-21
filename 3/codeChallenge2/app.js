function windowResize() {
    if (window.innerWidth >= 1200) {
        document.body.classList.add("wideWidth");
    } else if (window.innerWidth < 1200 && window.innerWidth > 700) {
        document.body.classList.remove("wideWidth");
        document.body.classList.add("middleWidth");
    } else if (window.innerWidth <= 700) {
        document.body.classList.remove("middleWidth");
        document.body.classList.add("smallWidth");
    }
}

window.addEventListener("resize", windowResize);