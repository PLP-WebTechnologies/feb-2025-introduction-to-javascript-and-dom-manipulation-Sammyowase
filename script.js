// Get DOM elements
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const toggleElementBtn = document.getElementById('toggleElementBtn');
const dynamicText = document.getElementById('dynamicText');
const toggleElement = document.getElementById('toggleElement');

// Change text content
changeTextBtn.addEventListener('click', () => {
    const texts = [
        "Hello, DOM Manipulation!",
        "Text has been changed!",
        "Click again to see more!",
        "JavaScript is fun!"
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    dynamicText.textContent = randomText;
});

// Modify CSS styles
changeStyleBtn.addEventListener('click', () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dynamicText.style.color = randomColor;
    dynamicText.style.fontSize = '1.5em';
    dynamicText.style.transition = 'all 0.3s ease';
});

// Toggle element visibility
toggleElementBtn.addEventListener('click', () => {
    toggleElement.style.display = 
        toggleElement.style.display === 'none' ? 'block' : 'none';
});