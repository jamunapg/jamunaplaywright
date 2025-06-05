import { test, expect } from "@playwright/test";
test("verify login with valid credential",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("standard_user")
await page.locator("input[type='password']").fill("secret_sauce")
await page.locator("input[type='submit']").click
await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")




})






