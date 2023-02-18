//SETTING VARIABLES REVIEW
var numberOne: number = 10 
var numberTwo: number = 15
var wordOne: string = "word"
var wordTwo: string = "two"
var booleanOne: boolean = true
var booleanTwo: boolean = false

describe("Should Use Variables Correctly", () => {
    it("Should add the numbers", () => {
        expect(numberOne + numberTwo).toEqual(25)
        expect(numberTwo - numberOne).toEqual(5)
    })
    it("should not pass with captials", () => {
        expect(wordOne).not.toEqual("wOrd")
        expect(wordTwo).toEqual("two")
    })
    it("should compare the booleans", () => {
        expect(booleanOne).not.toEqual(booleanTwo)
    })
})

//FUNCTIONS REVIEW IF ELSE

function wordPass(word: string): string {
    if (word === "First") {
        return "this is the first option"
    } else if (word === "Second") {
        return "this is the second option"
    } else {
        return "First and Second are your only options"
    }
}

describe("it should use the function correctly", () => {
    it("should pass this the first option", () => {
        expect(wordPass("First")).toBe("this is the first option")
    })
    it("should pass this the second option", () => {
        expect(wordPass("Second")).toBe("this is the second option")
    })
    it("should return the default value", () => {
        expect(wordPass("Pizza")).toBe("First and Second are your only options")
    })
})