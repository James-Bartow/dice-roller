class Result {
    constructor(diceResult, chanceDie = false) {
        this.diceResult = diceResult;
        this.successes = diceResult.filter(r => r >= 8).length
        this.dramaticFailure = diceResult.length == 1 && chanceDie && diceResult[0] == 1;
    }

}

module.exports = Result;