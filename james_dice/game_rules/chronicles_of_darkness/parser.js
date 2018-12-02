class Parser{
    parse(userInput){
        let parseResult ={
            rote: userInput.includes('--rote'), 
            againsLevel:10,
            dicePoolSize:0,
            isValid:true
        }
        let dicePoolSize = userInput.split(' ')[0]
        dicePoolSize = parseInt(dicePoolSize)
        if(isNaN(dicePoolSize) || !isFinite(dicePoolSize)){
            parseResult.isValid =false
            return parseResult
        }
        parseResult.dicePoolSize = dicePoolSize
        if (userInput.includes('--9-again')){
            parseResult.againsLevel=9
        }
        if (userInput.includes('--8-again')){
            parseResult.againsLevel=8
        }
        return parseResult
    }
}
module.exports = Parser;