
import {test,expect} from "@playwright/test"
test("checkbox checking example ",async ({page})=>{

   await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    // const checked = await page.locator(('input[type="checkbox"]')).isChecked()
    // console.log(checked)    //false
   await page.locator('input[type="checkbox"]').check()
   await expect(page.locator('input[type="checkbox"]')).toBeChecked()
   const checked = await page.locator(('input[type="checkbox"]')).isChecked()
   console.log(checked)     // true
//    if(!checked){
//     await page.locator('input[type="checkbox"]').check()
//    }
   await page.locator('input[type="checkbox"]').uncheck()
   await expect(page.locator('input[type="checkbox"]')).not.toBeChecked
   await page.waitForTimeout(3000)



})

test("checkbox pracrice",async ({page})=>{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
 const checkboxes=['#checkBoxOption1','#checkBoxOption2','#checkBoxOption3']
 for(let checkbox of checkboxes){
    await page.locator(checkbox).check()
 }



})