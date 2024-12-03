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
        // Function to handle the search input and open the URL in about:blank with an iframe
        function openURL() {
            const url = document.getElementById('search-input').value.trim();

            // Validate if the entered URL starts with http:// or https://
            if (url) {
                const validURL = /^https?:\/\//i.test(url);  // Checks if URL starts with "http://" or "https://"
                if (!validURL) {
                    // If URL is not valid, prepend "http://" to the entered URL
                    url = 'http://' + url;
                }

                // Open a blank page (about:blank)
                const newWindow = window.open('about:blank', '_blank');

                // Inject the URL into the new window's content
                newWindow.document.write(`
                    <html>
                    <head>
                        <style>
                            * {
                                margin: 0;
                                padding: 0;
                                border: 0;
                                box-sizing: border-box;
                            }
                            html, body {
                                width: 100%;
                                height: 100%;
                                overflow: hidden;
                            }
                            iframe {
                                width: 100%;
                                height: 100%;
                                border: none;
                            }
                        </style>
                    </head>
                    <body>
                        <iframe src="${url}" frameborder="0"></iframe>
                    </body>
                    </html>
                `);
                newWindow.document.close();  // Close the document stream after writing
            }
        }

        // Trigger the function when the button is clicked
        document.getElementById('search-btn').addEventListener('click', openURL);

        // Trigger the function when the "Enter" key is pressed
        document.getElementById('search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                openURL();
            }
        });