const Rote = require('./rote');
describe('rote action', () => {
    it('It should re roll failed dice', () => {
        let rote=new Rote()
        let diceresults = [7,8,9,10]

        let roteDiceCount = rote.CountRoteDice(diceresults)

        expect(roteDiceCount).toBe(1)
    });
    it('It should return the entire dicepool when no successes are rolled', () => {
        let rote = new Rote()
        let diceresults = [4,5,6,7]

        let roteDiceCount = rote.CountRoteDice(diceresults)

        expect(roteDiceCount).toBe(4)
    });
    it('It should return zero dice when all of the dice are successes', () => {
        let rote = new Rote()
        let diceresults = [8,9,10,10]

        let roteDiceCount = rote.CountRoteDice(diceresults)

        expect(roteDiceCount).toBe(0)
    });
});
