import {Builder, By, Capabilities, WebDriver} from 'selenium-webdriver'
const chromedriver = require("chromedriver")
const driver : WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

describe("Practicing CSS Selectors", () => {
    beforeEach(async () => {
        await driver.get("https://www.amazon.com")
    });
    afterAll(async () => {
        await driver.quit()
    })

    //Elements go here
    const searchBar: By = By.css('#twotabsearchtextbox')
    const results: By = By.css('.s-main-slot')

    test("searching for an item on amazon", async () => {
        await driver.findElement(searchBar).sendKeys('baby yoda\n')
        let resultsText = await driver.findElement(results).getText(); 
        expect(resultsText).toContain("The Child")
    } )
})