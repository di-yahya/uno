class Card {
    constructor(colour,number){
        this.colour = colour;
        this.number = number;
    }
}
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

class SpecialCard {
    constructor(type){
        this.type = type
    }
}
class Uno {
    constructor() {
        this.deck = [];
    }
}

