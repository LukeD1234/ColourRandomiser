const colours = ["green", "blue", "orange", "red", "yellow"];

const btn1 = document.getElementById('btn1');
const colour1 = document.querySelector('.colour1');
const result1 = document.querySelector('.result1');

btn1.addEventListener('click', function () {
    const randomNumber = getRandomNumber();

    result1.style.backgroundColor = colours[randomNumber];
    colour1.textContent = colours[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length)
}