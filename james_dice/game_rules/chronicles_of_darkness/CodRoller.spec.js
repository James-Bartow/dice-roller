const CodRoller = require('./CodRoller')
const Rules = require('./rules')
const Rote = require('./rote')
const Dice = require('./../../dice/roller')
jest.mock('./../../dice/roller')
jest.mock('./rote')
jest.mock('./rules')
describe('Chronicles of Darkness Roller', () => {
    it('should count agains', () => {
           
        Rules.mockImplementation(()=> {
            return {
                CountAgains  : (diceresults,againsLevel)=> 0
            }
        }) 
        Dice.mockImplementation(()=> {
            return {
                RollDiceOfPoolSize: ()=> [5,6,7,8,9]
            }
        })
        let roller = new CodRoller()
        let diceResults = roller.RollDicePool(5,10,false)
        
        expect (diceResults).toEqual([5,6,7,8,9])
    });
    // it('should count successes', () => {
    //     let rules = new Rules()
    //     let diceresults = [7,8,9,10]

    //     let successcount = rules.GetSuccesses(diceresults)

    //     expect(successcount).toBe(3)
    // });
});