const Dice = require ('./dice/roller')
const Rules = require('./game_rules/chronicles_of_darkness/rules')
const Roller = require('./game_rules/chronicles_of_darkness/roller')
const   readline= require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter a die roll >'
  });
let rules= new Rules()
let roller= new Roller(rules)
rl.on("line",line=>{
    let diceresults= roller.RollDicePool(line,10)   
    console.log(diceresults)
    let successes= rules.GetSuccesses(diceresults)
    console.log("successes: "+successes)
    rl.prompt("enter another die roll")
})
let diceResult=Dice.RollDiceOfPoolSize(5)
console.log(diceResult)
console.log(rules.GetSuccesses(diceResult))
rl.prompt()