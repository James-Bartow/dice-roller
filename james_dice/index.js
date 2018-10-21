const   readline= require("readline");
console.log("Hello James!")

// Comment are any line that starts with a slash

/*
or are surrounded like this
*/
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

let a_number = 5;
let a_string = "Some string";
let a_decimal_number = 3.14;
let an_array = [5, "String", a_number];
let an_object = {
    property: "value",
    other_property: 5,
    some_property_that_is_an_array: an_array
}
let a=an_object.some_property_that_is_an_array
console.log("a; " + a);
// setTimeout(function(){
//     setInterval (function(){console.log("this is an interval")}, 500)

// },1500)
console.log("a_number: " + a_number);
console.log("a_string " + a_string);
console.log("an_array " + an_array);
console.log("an_object " + an_object);

console.log("A random number between 0 and 1 : " + rolldice())
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