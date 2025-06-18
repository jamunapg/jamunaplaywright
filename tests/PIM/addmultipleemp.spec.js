import {test , expect} from "@playwright/test";
const addemployees={
    emp1:{firstaname:"jamuna",lastname:"j"},
    emp2:{firstaname:"anjali",lastname:"a"},
    emp3:{firstaname:"sowmya",lastname:"s"},
    emp4:{firstaname:"tejaswini",lastname:"t"},
    emp5:{firstaname:"awini",lastname:"a"}

}

for(let employee in addemployees){



test(`add  no of emplyoyees one testcase -${addemployees[employee].firstaname}` , async ({page}) =>{
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 await page.locator("input[placeholder='Username']").fill("Admin")
 await page.locator("input[name='password']").fill("admin123")
 await page.locator("button[type='submit']").click();
 await page.locator("//span[text()='Dashboard']").click();
 await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
 await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
 await page .locator("//li[contains(.,'Add Employee')]").click();
 await page .locator("input[name='firstName']").fill(addemployees[employee].firstaname)
 await page.locator("//input[@placeholder='Last Name']").fill(addemployees[employee].lastname)
 await page.locator("//button[@type='submit']").click();

}) 
}