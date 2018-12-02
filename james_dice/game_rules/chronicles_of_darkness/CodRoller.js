const Dice = require ('../../dice/roller')
const Rules = require ('./rules')
const Rote = require ('./rote')
class CodRoller {
    constructor () {
        this.rules = new Rules()
        this.rote = new Rote()
        this.dice = new Dice()
    }
    RollDicePool (poolSize,againsLevel,isRote){
        let initialDice= this.dice.RollDiceOfPoolSize(poolSize);
        if (isRote) {
            let roteDice = this.rote.CountRoteDice(initialDice)
            let roteDiceResults = this.dice.RollDiceOfPoolSize(roteDice)
           initialDice = initialDice.concat(roteDiceResults)
        }
        return this.rerollagains(initialDice, againsLevel)
        
    }

    rerollagains(initialDieResult, againsLevel) {
        let againsPoolSize= this.rules.CountAgains(initialDieResult,againsLevel)
        while(againsPoolSize >0){
            let diceResultOfAgainsPool = this.dice.RollDiceOfPoolSize(againsPoolSize)
            initialDieResult = initialDieResult.concat(diceResultOfAgainsPool)
            againsPoolSize = this.rules.CountAgains(diceResultOfAgainsPool,againsLevel)
        }
        return initialDieResult
    }

}
module.exports = CodRoller