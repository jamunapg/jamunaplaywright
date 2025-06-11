import {test, expect}from '@playwright/test';
import logindata from "../testData/login.json"
test("verify login with valid credential",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click()
//await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})

test("verify login with valid username,invalid password",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin245")
await page.locator("button.oxd-button.oxd-button--medium").click()
await expect(page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']")).toBeVisible()
})

test("verify login with invalid username,valid password",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("hfrifhi")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button.oxd-button.oxd-button--medium").click()
await expect(page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']")).toBeVisible()
})


test("verify login with invalid username,invalid password",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("hfrifhi")
await page.locator("input[type='password']").fill("admin173")
await page.locator("button.oxd-button.oxd-button--medium").click()
await expect(page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']")).toBeVisible()
})
