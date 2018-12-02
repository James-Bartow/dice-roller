const Rules = require('./rules')
describe('Chronicles of Darkness Rules', () => {
    it('should count agains', () => {
        let rules=new Rules()
        let diceresults = [7,8,9,10]

        let againcount = rules.CountAgains(diceresults,9)

        expect(againcount).toBe(2)
    });
    it('should count successes', () => {
        let rules = new Rules()
        let diceresults = [7,8,9,10]

        let successcount = rules.GetSuccesses(diceresults)

        expect(successcount).toBe(3)
    });
});
