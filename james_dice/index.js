const   readline= require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter a die roll >'
  });
rl.on("line",line=>{
    let diceresults= tonsOfDice(line)   
    console.log(diceresults)
    let successes= countSuccesses(diceresults)
    console.log("successes: "+successes)
    rl.prompt("enter another die roll")
})

function rolldice(){
    return Math.floor( Math.random() *10+1);
}
function tonsOfDice(dicePool){
    let diceResults=[];
    for(var i=0; i < dicePool; i++){
 t       let rollResult= rolldice();
        diceResults.push(rollResult);
    }
    return diceResults;
}
let diceResult=tonsOfDice(5)
console.log(diceResult)
console.log(countSuccesses(diceResult))
function countSuccesses(diceResults){
    let successes=0;
    for (var i=0; i< diceResults.length; i++){
        if (diceResults[i] >7){
            successes=successes+1;
        }
    }
    return successes;
}
rl.prompt()