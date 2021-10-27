const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn2 = document.getElementById('btn2');
const colour2 = document.querySelector('.colour2');
const result2 = document.querySelector('.result2');

btn2.addEventListener('click', function () {
    let hexColour = "#";
    for (i = 0; i < 6; i++) {
        hexColour += hex[getRandomNumber()];

        result2.style.backgroundColor = hexColour;
        colour2.textContent = hexColour;
    }
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}