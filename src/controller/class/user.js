const MachineOptions = require('./machine');

class User extends MachineOptions {
    constructor({ opt, name, selected }) {
        super({ opt });
        this._name = name;
        this._selected = selected;
        this._sort = this.sort();
    }

    set name(string) {
        this._name = string;
    }
    get name() {
        return this._name;
    }
    set selected(string) {
        this._selected = string;
    }
    get selected() {
        return this._selected;
    }
    logic() {
        if (this._selected === this._sort) {
            return `uhhhhhhhhhh this's a draw ${this._name}!!! ${this._name}: ${this._selected} | Machine: ${this._sort}`;
        } else if ((this._selected === "Rock" && this._sort === "Scissors") || (this._selected === "Paper" && this._sort === "Rock") || (this._selected === "Scissors" && this._sort === "Paper") ) {
            return `Uowww ${this._name} WINSS! ${this._name}: ${this._selected} | Machine: ${this._sort}`;
        } 
        return `Opss ${this._name} Loses! ${this._name}: ${this._selected} | Machine: ${this._sort}`;
    
    }
    game() {
        return this.logic();
    }

}

module.exports = User;