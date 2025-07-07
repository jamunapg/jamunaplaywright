import {test,expect} from "@playwright/test"
test("verify alerts example",async ({page})=>{
   await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
   await page.locator('//button[text()="Click for JS Alert"]')






})