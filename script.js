
const facts = [
    "A day on Venus is longer than its year.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "Neutron stars are among the densest objects known in the universe.",
    "The Milky Way contains billions of stars.",
    "The observable universe is about 13.8 billion years old.",
    "Saturn's average density is lower than that of water.",
    "Black holes can have an enormous gravitational influence on their surroundings."
];

const factButton = document.querySelector("#fact-button");
const factDisplay = document.querySelector("#fact");

let previousFact = -1;

if (factButton && factDisplay) {
    factButton.addEventListener("click", function () {
        let nextFact;

        do {
            nextFact = Math.floor(Math.random() * facts.length);
        } while (facts.length > 1 && nextFact === previousFact);

        previousFact = nextFact;
        factDisplay.textContent = facts[nextFact];
    });
}
