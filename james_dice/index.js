const Dice = require ('./dice/roller')
const Rules = require('./game_rules/chronicles_of_darkness/rules')
const Roller = require('./game_rules/chronicles_of_darkness/roller')
const   readline= require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter a die roll >'
  });
rl.on("line",line=>{
    let diceresults= Roller.RollDicePool(line,10)   
    console.log(diceresults)
    let successes= Rules.GetSuccesses(diceresults)
    console.log("successes: "+successes)
    rl.prompt("enter another die roll")
})
let diceResult=Dice.Tonsofdice(5)
console.log(diceResult)
console.log(Rules.GetSuccesses(diceResult))
rl.prompt()