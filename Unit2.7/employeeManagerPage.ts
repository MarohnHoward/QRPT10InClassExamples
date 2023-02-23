import {Builder, By, until, WebDriver} from 'selenium-webdriver'

export class employeePO {
    driver: WebDriver; 
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
    header: By = By.css('.titleText')
    addEmployee: By = By.xpath('//li[@name="addEmployee"]')
    newEmployee: By = By.name('employee11')
    nameInput: By = By.name('nameEntry')
    phoneInput: By = By.name('phoneEntry')
    titleInput: By = By.name('titleEntry')
    saveBtn: By = By.id('saveBtn')
    constructor(driver: WebDriver) {
        this.driver = driver
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).click()
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return await this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.driver.findElement(elementBy)
        await input.click()
        await input.clear()
        return input.sendKeys(keys)
    }
}