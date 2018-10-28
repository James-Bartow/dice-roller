class CodRules{
    GetSuccesses(diceResults){
        return this.CountAgains(diceResults,8)
    }
    CountAgains(diceResults, AgainNumber) {
        let successes=0;
        for (var i=0; i< diceResults.length; i++){
            if (diceResults[i] >=AgainNumber){
                successes=successes+1;
            }
        }
        return successes;
    }
}
module.exports= CodRules