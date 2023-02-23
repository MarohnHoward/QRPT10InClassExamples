import {Builder, Capabilities, WebDriver} from 'selenium-webdriver'
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

import {employeePO} from './employeeManagerPage'

const employP = new employeePO(driver)

describe("Practicing abstraction", () => {
    beforeEach(async () => {
        await employP.navigate()
    })
    afterAll(async () => {
        await employP.driver.quit()
    })
    test('adding an employee name', async () => {
        await employP.click(employP.addEmployee)
        await employP.click(employP.newEmployee)
        await employP.setInput(employP.nameInput, "Joe Shmo")
        await employP.click(employP.saveBtn)
    })
})