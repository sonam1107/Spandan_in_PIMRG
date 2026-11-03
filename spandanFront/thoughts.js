// a small thought on the home page, button shows another one
const thoughts = [
    "Every great memory starts with a small decision to show up.",
    "Talent wins a stage, practice wins the crowd.",
    "Don't wait for the perfect moment, step on the stage and make it perfect.",
    "Win or lose, the best part of a fest is the people you meet.",
    "Be so good at your craft that nervousness becomes excitement.",
    "Teamwork turns ordinary college days into stories.",
    "Try one event you have never tried before."
];

const thoughtText = document.getElementById("thought_text");
const thoughtBtn = document.getElementById("thought_btn");

// start with a random one so every visit feels fresh
let current = Math.floor(Math.random() * thoughts.length);
thoughtText.innerText = '"' + thoughts[current] + '"';

thoughtBtn.addEventListener("click", function () {
    let next = current;
    while (next === current) {
        next = Math.floor(Math.random() * thoughts.length);
    }
    current = next;
    thoughtText.innerText = '"' + thoughts[current] + '"';
});
