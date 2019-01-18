export class Account {
    constructor(private _id: number, private _name: string, private _cash: number) { }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get cash() {
        return this._cash;
    }
}