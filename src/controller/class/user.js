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
        } else {
            return `HUmmm.. The machine is learning, ${this._name}: ${this._selected} | Machine: ${this._sort}`;
        }
    }
    game() {
        return this.logic();
    }

}

module.exports = User;