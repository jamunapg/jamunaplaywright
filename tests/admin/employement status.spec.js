import{test,expect} from "@playwright/test"

test("verify employee status",async({page})=>{   
    
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill(process.env.ORG-USERNAME)
await page.locator("input[type='password']").fill(process.env.ORG-PASSWORD)
await page.locator("button[type='submit']").click()
await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
await page.locator("button.oxd-button.oxd-button--medium.oxd-button--secondary").click()
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("SoftwareEngineer")
await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")

})