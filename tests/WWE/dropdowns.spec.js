import{test,expect} from '@playwright/test'
test("verify drowpdown example", async ({page})=>{
await page.goto ("https://register.rediff.com/register/register.php?FormName=user_details")

// text method
//await page.locator('#country').selectOption('Bangladesh')
//await page.locator('#country').selectOption('India')

// value/label
//await page.locator('#country').selectOption('10')
//await page.locator('#country').selectOption('4')


// index method
//await page.locator('#country').selectOption({label:"Azerbaijan"})

await expect.soft(page.locator('#country>option')).toHaveCount(248)
const dropdown = page.locator('#country')
const options = await dropdown.locator('option').allTextContents()
console.log(options)

await page.waitForTimeout(5000)



})

