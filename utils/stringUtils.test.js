const {repeatNTimesWithSpace, capitalizeFirstLetter} = require ('./stringUtils')

// this is a utit test; later will do integrated tests
// using " , () => {} " - familiar from axios or callbacks
// install a Dev dependency -D testing libray: Jest; npm install -D jest
// in package.json: when "npm run test", jest will be run instead.
describe ("take a string and a number, and repeat string same number of times separated by spaces.", () => {

    it("handles an empty string", () => {
        expect (repeatNTimesWithSpace('', 0)).toBe('');
        expect (repeatNTimesWithSpace('', 5)).toBe('');
    });

    it ("handles a string with one or more characters", () => {
        expect (repeatNTimesWithSpace('a', 1)).toBe('a');
        expect (repeatNTimesWithSpace('a', 5)).toBe('a a a a a');
        expect (repeatNTimesWithSpace('abc', 3)).toBe('abc abc abc');

    })
})

describe ("take a string of any length, capitalize the first letter.", () => {
    it ("handles an empty string", () => {
        expect (capitalizeFirstLetter('')).toBe('');
    })

    it ("handles a string with only one character", () => {
        expect (capitalizeFirstLetter('a')).toBe('A');
    })

    it ("handles a string with more than one character", () => {
        expect (capitalizeFirstLetter('abc')).toBe('Abc');
    })

    it ("handles a string with spaces between each word", () => {
        expect (capitalizeFirstLetter('i love coding')).toBe('I love coding');
    })

    it ("handles a string where the first letter is already capitalized", () => {
        expect (capitalizeFirstLetter('I am great')).toBe('I am great');
    })
} )