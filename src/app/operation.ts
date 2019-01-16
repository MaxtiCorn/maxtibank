export class Operation {
    constructor(private _sender: string, private _reciever: string, private _money: number) { }

    get sender() {
        return this._sender;
    }

    get reciever() {
        return this._reciever;
    }

    get money() {
        return this._money;
    }
}