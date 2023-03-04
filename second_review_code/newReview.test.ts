import {Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver";
const chromedriver = require ("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
import { emManager } from "./examplePOM";
const employeePage = new emManager(driver);

class inturns {
    name: string;
    phone: number;
    title: string;

    constructor(name:string, phone: number, title: string){
        this.name = name;
        this.phone = phone;
        this.title = title;
    }

}

let newInturns: Array<inturns>= [
    new inturns("Blossom", 1234567890, "Power Puff Girl"),
    new inturns ("Buttercup", 8675309991, "Power Puff Goil"),
    new inturns("Bubbles", 5559990178, "Power Puff Goil"),
    new inturns("Miss Sara Bellum", 9874563210, "Secretary")
]
let addEmp = async ( newInturns)=>{
    await employeePage.click(employeePage.addEmployee);
    await employeePage.click(employeePage.newEmployee);
    await employeePage.click(employeePage.nameField);
    await employeePage.setInput(employeePage.nameField, newInturns.name);
    await employeePage.click(employeePage.phoneField);
    await employeePage.setInput(employeePage.phoneField, newInturns.phone);
    await employeePage.click(employeePage.titleField);
    await employeePage.setInput(employeePage.titleField,newInturns.title);
    await employeePage.click(employeePage.saveBtn);
    await employeePage.driver.sleep(3000);
}

describe("should add employees to employee manager", ()=>{
    test("can add employees using array", async()=>{
        await employeePage.driver.manage().window().maximize();
        await employeePage.navigate()
        for (let i = 0; i < newInturns.length; i++){
    await addEmp(newInturns[i])

}   
await employeePage.driver.quit()
 })
})