const Rules= require('./rules')
let rules = new Rules()
class Rote{
    CountRoteDice(diceResults){
       return diceResults.length - rules.CountAgains(diceResults,8)
    }
}
module.exports= Rote
