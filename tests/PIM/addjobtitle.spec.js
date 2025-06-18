import { test, expect } from "@playwright/test";
test ("verify multiple jobtitle one testcase" , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123") 
    await page.locator("button[type='submit']").click();
    await page.locator("//span[text()='Dashboard']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
    await page.locator("//a[normalize-space(text())='Add Employee']").click();
    await page.locator("(//input[contains(@class,'oxd-input oxd-input--active')])[2]").fill("jamuna")
    await page.locator("//input[@placeholder='Last Name']").fill("G")
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("0237")
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/363")

})