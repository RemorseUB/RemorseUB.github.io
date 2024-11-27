// script.js

// Apply saved background color on page load
function applyBackgroundColor() {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

// Change the background color and save it to localStorage
function changeBackground(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgColor', color);
}

// Initialize particles.js for the background effect
particlesJS("particles-home", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        }
    },
    retina_detect: true
});

// Apply saved background color on page load
document.addEventListener('DOMContentLoaded', applyBackgroundColor);
