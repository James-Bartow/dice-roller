const Dice = require ('./dice/roller')
const Rules = require('./game_rules/chronicles_of_darkness')
const   readline= require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter a die roll >'
  });
rl.on("line",line=>{
    let diceresults= Dice.Tonsofdice(line)   
    console.log(diceresults)
    let successes= Rules.GetSuccesses(diceresults)
    console.log("successes: "+successes)
    rl.prompt("enter another die roll")
})
let diceResult=Dice.Tonsofdice(5)
console.log(diceResult)
console.log(Rules.GetSuccesses(diceResult))
rl.prompt()
console.log(Rules.CountAgains([7,8,9,10], 10))