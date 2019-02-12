export class Operation {
    constructor(private _cash: number, private _comment: string) { }

    get cash() {
        return this._cash;
    }

    get comment() {
        return this._comment;
    }
}