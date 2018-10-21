function countSuccesses(diceResults){
    let successes=0;
    for (var i=0; i< diceResults.length; i++){
        if (diceResults[i] >7){
            successes=successes+1;
        }
    }
    return successes;
}

module.exports = {
    GetSuccesses : countSuccesses
}