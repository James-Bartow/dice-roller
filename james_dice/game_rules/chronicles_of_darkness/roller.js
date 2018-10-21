const rules = require('./rules')
const Dice = require ('../../dice/roller')
function rolldicepool (poolsize,againslevel){
    let initialdice= Dice.RollDiceOfPoolSize(poolsize);
    return rerollagains(initialdice, againslevel)
}
function rerollagains(initialdieresult, againslevel) {
    let againspool= rules.CountAgains(initialdieresult,againslevel)
    while(againspool >0){
        let diceResultOfAgainsPool = Dice.RollDiceOfPoolSize(againspool)
        initialdieresult = initialdieresult.concat(diceResultOfAgainsPool)
        againspool = rules.CountAgains(diceResultOfAgainsPool,againslevel)
    }
    return initialdieresult
}
module.exports = {
    RollDicePool : rolldicepool
}