const circle = document.querySelector(".circle")

function glitch() {
    circle.classList.add("glitch");
    setTimeout(() => circle.classList.remove("glitch"), 120);
}

setInterval(() => {
    if (Math.random() < 0.22) glitch();
}, 300);