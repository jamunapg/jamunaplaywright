import {test,expect} from "@playwright/test"
test("verify radio buttons", async ({page}) =>{
 await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

 await expect(page.locator('input[value="m"]')).toBeChecked()
 await expect(page.locator('input[value="f"]')).not.toBeChecked()
 
 await page.locator('input[value="f"]').click()

 await expect(page.locator('input[value="m"]')).not.toBeChecked()
 await expect(page.locator('input[value="f"]')).toBeChecked()

 const isChecked = await page.locator('input[value="f"]').isChecked()  // true/false
 console.log(isChecked)
 await page.waitForTimeout(5000)

})