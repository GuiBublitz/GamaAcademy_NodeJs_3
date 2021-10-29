const MachineOptions = require('./machine');

class User extends MachineOptions {
    constructor({opt, name, selected}){
        super({opt});   
        this._name = name;
        this._selected = selected;
    }

    set name(string){
        this._name = string;
    }
    get name(){
        return this._name;
    }
    set selected(string){
        this._selected = string;
    }
    get selected(){
        return this._selected;
    }

}

module.exports = User;