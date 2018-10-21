
function countSuccesses(diceResults){
    return CountAgains(diceResults,8)
}

module.exports = {
    GetSuccesses : countSuccesses,
    CountAgains 
}
function CountAgains(diceResults, AgainNumber) {
    let successes=0;
    for (var i=0; i< diceResults.length; i++){
        if (diceResults[i] >=AgainNumber){
            successes=successes+1;
        }
    }
    return successes;
}
