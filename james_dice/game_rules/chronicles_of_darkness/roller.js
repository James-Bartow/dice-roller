const rules = require('./rules')
const Dice = require ('../../dice/roller')
function rolldicepool (poolsize,againslevel){
    let initialdice= Dice.Tonsofdice(poolsize);
    return rerollagains(initialdice, againslevel)
}
function rerollagains(initialdieresult, againslevel) {
    let againspool= rules.CountAgains(initialdieresult,againslevel)
    while(againspool >0){
        let againsdice = Dice.Tonsofdice(againspool)
        initialdieresult = initialdieresult.concat(againsdice)
        againspool = rules.CountAgains(againsdice,againslevel)
    }
    return initialdieresult
}
module.exports = {
    RollDicePool : rolldicepool
}