const roller = require('./roller')
const jestrandom = require('jest-mock-random')
describe('Dice roler should roll dice', () => {
    it('should roll dice of length 5', () => {
        let poolsize=5

        let rollresults = roller.RollDiceOfPoolSize(poolsize)
        
        expect(rollresults.length).toBe(5)
    });
    it('results should return from a 10 sided die', () => {
        let poolsize =1
        jestrandom.mockRandom([.99])

        let rollresults= roller.RollDiceOfPoolSize(poolsize)

        expect(rollresults[0]).toBe(10)
    })
    it('results have a minimum of 1', () =>{
        let poolsize =1
        jestrandom.mockRandom([0])
        
        let rollresults= roller.RollDiceOfPoolSize(poolsize)

        expect(rollresults[0]).toBe(1)
    })
});