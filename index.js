class Player {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }

    has_won() {
        if (this.cards.length === 0) {
            return true;
        }
        return false;
    }


}

const player1 = new Player("Yahya");


console.log(player1)
console.log(player1.has_won())