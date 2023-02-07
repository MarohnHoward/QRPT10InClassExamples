import {describe, it} from "@jest/globals"
// This line is telling our system that we are looking for describe and it from the jest libraries.
describe("testing math", () => {
    // describe is like our test plan it holds our cases for the project or unit.
    it("should do some simple math", () => {
        // It is like a test case it holds how we are testing the feature.
        expect(10).toBeGreaterThan(5)
        expect(5).toBeLessThan(10)
        expect(5).toEqual(5)
        expect(5 === 5).toBeTruthy()
    })
})