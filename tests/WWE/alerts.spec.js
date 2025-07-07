import { test, expect } from "@playwright/test"
test("verify alerts example", async ({ page }) => {

   await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

   await page.locator('//button[text()="Click for JS Alert"]')
   page.on('dialog', async dailog => {
      await expect(dailog.message).toBe('I am a JS Alert')
      await dailog.accept()
      await page.waitForTimeout(5000)

   })
})

test("verify confirm alerts example", async ({ page }) => {

   await page.locator('//button[text()="Click for JS Confirm"]')
   page.on('dialog', async dailog => {
      await expect(dailog.message).toBe('I am a JS Alert')
      await dailog.accept()
      await page.waitForTimeout(5000)

   })
})

test("verify prompt alerts example", async ({ page }) => {

await page.locator('//button[text()="Click for JS Prompt"]')
   page.on('dialog', async dailog => {
      await expect(dailog.message).toBe('I am a JS prompt')
      await dailog.accept()
      await page.waitForTimeout(5000)

   })
})