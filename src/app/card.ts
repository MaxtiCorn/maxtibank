export class Card {
    constructor(private _number: string, private _date: string, private _cvc: string) { }

    get number() {
        return this._number;
    }

    set number(value: string) {
        this._number = value;
    }

    get date() {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get cvc() {
        return this._cvc;
    }

    set cvc(value: string) {
        this._cvc = value;
    }
}