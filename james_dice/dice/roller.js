
function rolldice(){
    return Math.floor( Math.random() *10+1);
}
function RollDiceOfPoolSize(dicePool){
    let diceResults=[];
    for(var i=0; i < dicePool; i++){
        let rollResult= rolldice();
        diceResults.push(rollResult);
    }
    return diceResults;
}
module.exports = {
    Rolldice : rolldice,
    RollDiceOfPoolSize : RollDiceOfPoolSize
}