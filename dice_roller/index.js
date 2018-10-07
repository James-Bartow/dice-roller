const Dice = require('./dice/dice.js');
const Pool = require('./dice/pool.js');
const Result = require('./game/wod/result');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter a die roll >'
});
rl.prompt();
let die = new Dice(10)
rl.on("line", line => {
    if (line.includes("exit") || line.includes("quit")) {
        rl.close();
        return;
    }
    let poolSize = line | 0;
    let pool = new Pool(poolSize, die);
    var result = pool.roll();
    console.log(result);
    var wod = new Result(result, true);
    console.log(JSON.stringify(wod,null, 2))
    rl.prompt("Enter another die roll >");

}).on('close', () => {
    console.log("Thank you for using the dice roller");
    process.exit(0);
})
console.log("done")