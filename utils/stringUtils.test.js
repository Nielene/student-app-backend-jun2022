const {repeatNTimesWithSpace} = require ('./stringUtils')

// this is a utit test; later will do integrated tests
// using " , () => {} " - familiar from axios or callbacks
// install a Dev dependency -D testing libray: Jest; npm install -D jest
// in package.json: when "npm run test", jest will be run instead.
describe ("take a string and a number, and repeat string same number of times separated by spaces.", () => {

    it("handles an empty string", () => {
        expect (repeatNTimesWithSpace('', 0)).toBe('');
        expect (repeatNTimesWithSpace('', 5)).toBe('');

    })
})