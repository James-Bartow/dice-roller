const Rules = require('./rules')
let rules= new Rules()
const Dice = require ('../../dice/roller')
class CodRoller {
    RollDicePool (poolsize,againslevel){
        let initialdice= Dice.RollDiceOfPoolSize(poolsize);
        return this.rerollagains(initialdice, againslevel)
    }

    rerollagains(initialdieresult, againslevel) {
        let againsPoolSize= rules.CountAgains(initialdieresult,againslevel)
        while(againsPoolSize >0){
            let diceResultOfAgainsPool = Dice.RollDiceOfPoolSize(againsPoolSize)
            initialdieresult = initialdieresult.concat(diceResultOfAgainsPool)
            againsPoolSize = rules.CountAgains(diceResultOfAgainsPool,againslevel)
        }
        return initialdieresult
    }
}
module.exports = CodRoller