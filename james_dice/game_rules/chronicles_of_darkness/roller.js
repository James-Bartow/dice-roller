const Dice = require ('../../dice/roller')
class CodRoller {
    constructor(rules){
        this.rules=rules
    }
    RollDicePool (poolsize,againslevel){
        let initialdice= Dice.RollDiceOfPoolSize(poolsize);
        return this.rerollagains(initialdice, againslevel)
    }

    rerollagains(initialdieresult, againslevel) {
        let againsPoolSize= this.rules.CountAgains(initialdieresult,againslevel)
        while(againsPoolSize >0){
            let diceResultOfAgainsPool = Dice.RollDiceOfPoolSize(againsPoolSize)
            initialdieresult = initialdieresult.concat(diceResultOfAgainsPool)
            againsPoolSize = this.rules.CountAgains(diceResultOfAgainsPool,againslevel)
        }
        return initialdieresult
    }

}
module.exports = CodRoller