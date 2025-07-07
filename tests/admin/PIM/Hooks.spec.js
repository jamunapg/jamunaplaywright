//const {test, expext}=require("@playwright/test")
// test.beforeAll(()=>{
//     console.log("beforeAll hook")
// })
// test.afterAll(()=>{
//     console.log("afterAll hook")
// })
//  test.beforeEach(()=>{
//     console.log("beforeEach hook")
// })
// test.afterEach(()=>{
//     console.log("afterEach hook")
// })
// test ("jamuna",() => {
//  console.log("jamuna")
// })
// test ("gowthami",() => {
//  console.log("gowthami")
// })
// test ("bhavya",() => {
//  console.log("bhavya")
// })

import { test, expect } from "@playwright/test"
//test("verify add paygrades", async ({ page }) => {
    test.beforeEach(async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@class='oxd-input oxd-input--active']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("//a[@href='/web/index.php/admin/viewAdminModule']").click()
    await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[1]").click()
})
test.describe("admin", () => {
    test("add job title", async ({ page }) => {
        await page.locator("(//a[@role='menuitem'])[1]").click()
        await page.locator("(//i[@class='oxd-icon bi-plus oxd-button-icon'])[1]").click()
        let r =(Math.random()+ 1).toString(36).substring(7)
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[1]").fill(process.env.JobTitle+r)
        await page.locator("//button[@type='submit']").click()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
    })

test("add paygreds",async({page})=>{
await page.locator("(//a[@role='menuitem'])[1]").click()
await page.locator("(//button[@type='button'])[1]").click()
let r =(Math.random()+ 1).toString(36).substring(7)
await page.locator("(//input[@class='oxd-input oxd-input--active'])[1]").fill(process.env.PayGradesS+r)
await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade/6")
})

})

