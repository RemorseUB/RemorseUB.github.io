// script.js
function applyBackgroundColor() {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

function changeBackground(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgColor', color);
}

document.addEventListener("DOMContentLoaded", applyBackgroundColor);
