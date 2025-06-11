import {test, expect}from "@playwright/test";
test("verify login with valid credential",async({page})=>{
await page.goto("https://www.saucedemo.com")
await page.locator("input[data-test='username']").fill("standard_user") 
await page.locator("input[type='password']").fill("secret_sauce")
await page.locator("input[type='submit']").click()
//await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})

test("verify login with valid username inavalid password",async({page})=>{
await page.goto("https://www.saucedemo.com")
await page.locator("input[data-test='username']").fill("standard_user") 
await page.locator("input[type='password']").fill("secret_sauco")
await page.locator("input[type='submit']").click()
await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
})

test("verify login with invalid username avalid password",async({page})=>{
await page.goto("https://www.saucedemo.com")
await page.locator("input[data-test='username']").fill("standa_user") 
await page.locator("input[type='password']").fill("secret_sauco")
await page.locator("input[type='submit']").click()
await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
})

test("verify login with invalid username inavalid password",async({page})=>{
await page.goto("https://www.saucedemo.com")
await page.locator("input[data-test='username']").fill("rd_user") 
await page.locator("input[type='password']").fill("secret_sauugyhjfco")
await page.locator("input[type='submit']").click()
await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
})