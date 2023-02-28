import {Google} from './googleWBP'
const google = new Google()

describe("should open google", () => {
    test("should search something", async () => {
        await google.navigate()
        await google.search("Hogwarts Legacy")
        await google.getResults()
        await google.driver.sleep(2000)
        await google.driver.quit()
    })
})