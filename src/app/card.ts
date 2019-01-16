export class Card {
    constructor(private number: string, private date: string, private cvc: string) { }

    getNumber() {
        return this.number;
    }
}