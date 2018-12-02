const Parser = require('./parser');
describe ('parser', () =>{
    it( 'It should interpret the size of the dice pool', () => {
        let parser= new Parser()
        let userInput = "5"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.dicePoolSize).toBe(5)
    })
    it( 'It should determine rote quality', () => {
        let parser= new Parser()
        let userInput = "6 --rote"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.dicePoolSize).toBe(6)
        expect (parseResult.rote).toBe(true)
    })
    it( 'It should determine 8-again rules', () => {
        let parser= new Parser()
        let userInput = "5 --8-again"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.againsLevel).toBe(8)
    })
    it( 'It should determine 8-again rules and rote', () => {
        let parser= new Parser()
        let userInput = "5 --8-again --rote"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.againsLevel).toBe(8)
        expect (parseResult.rote).toBe(true)
    })
    it( 'It should determine 9- again rules', () => {
        let parser= new Parser()
        let userInput = "5 --9-again"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.againsLevel).toBe(9)
    })
    it( 'It should default to 10 again', () => {
        let parser= new Parser()
        let userInput = "5"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.againsLevel).toBe(10)
    })
    it('Rote should default to false', () => {
        let parser= new Parser()
        let userInput = "5"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.rote).toBe(false)
    })
    it('It should validate input', () =>{
        let parser= new Parser()
        let userInput = "alskdjgasdfl6;nj"
 
        let parseResult = parser.parse(userInput)
 
        expect (parseResult.isValid).toBe(false)
    })
})