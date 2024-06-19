const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');
btn.addEventListener('click', () => {
    const randomNumber = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomNumber;
    colorSpan.textContent = randomNumber;
})