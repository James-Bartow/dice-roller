const Dice = require ('./dice/roller')
const Rules = require('./game_rules/chronicles_of_darkness/rules')
const Roller = require('./game_rules/chronicles_of_darkness/CodRoller')
const   readline= require("readline")
const Parser = require('./game_rules/chronicles_of_darkness/parser')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter a die roll >'
  });
let rules= new Rules()
let roller= new Roller()
let parser= new Parser()
rl.on("line",line=>{
    let parseResults= parser.parse(line)
    if(!parseResults.isValid){
        console.log ("Invalid Input!!!")
        return
    }
    let diceresults= roller.RollDicePool(parseResults.dicePoolSize,parseResults.againsLevel, parseResults.rote)   
    console.log(diceresults.sort((a,b) => b-a))
    let successes= rules.GetSuccesses(diceresults)
    console.log("successes: "+successes)
    rl.prompt("enter another die roll")
})
rl.prompt()