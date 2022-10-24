class SuperHuman {
    constructor(name, powerLevel) {
        this.name = name;
        this.powerLevel = powerLevel;
    }
}
class SuperHero extends SuperHuman {
    constructor(name, alias, powerLevel) {
        super(name, powerLevel);
        this.alias = alias;
    }
    battle(SuperVillain) {
        return this.powerLevel >= SuperVillain.powerLevel;
    }
}
class SuperVillain extends SuperHuman {
    constructor(name, alias, powerLevel) {
        super(name, powerLevel);
        this.alias = alias;
    }
    getEvilChuckle() {
        return "Ha ha ha!";
    }
}

// Define SuperHero and SuperVillain classes here

const heroes = {
    "Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
    "Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
    "Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
    "Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9),
};

const villains = {
    "The Jokester": new SuperVillain("Jack Nastier", "The Jokester", 3),
    "Magnet Man": new SuperVillain("Max Eisenhardt", "Magnet Man", 6),
    "Lex Loner": new SuperVillain("Lex Loner", "Lex Loner", 2),
    Thankos: new SuperVillain("Thankos", "Thankos", 9),
};

registerHandlers();

function registerHandlers() {
    // Detect selection of hero and villain
    document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
    document.querySelector("#villainSelect").addEventListener("change", selectionChanged);

    selectionChanged();
}

function selectionChanged() {
    var winnerID = document.getElementById("winner");
    const selectedHeroValue = document.querySelector("#heroSelect").value;
    const selectedVillainValue = document.querySelector("#villainSelect").value;

    // Get hero and villain selected
    const selectedHero = heroes[selectedHeroValue];
    const selectedVillain = villains[selectedVillainValue];

    // Your code goes here
    if (selectedHero.battle(selectedVillain)) {
        winnerID.innerHTML = "";
        let displayHero = document.createTextNode(`Winner: ${selectedHero.alias}!`);
        winnerID.appendChild(displayHero);
    } else {
        winnerID.innerHTML = "";
        let displayVillain = document.createTextNode(`Winner: ${selectedVillain.alias}!`);
        winnerID.appendChild(displayVillain);
    }
}
