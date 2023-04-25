const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    console.dir(event);
    // alert("clicked");
}

link.addEventListener("click", handleLinkClick);