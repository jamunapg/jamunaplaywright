import{test,expect,} from "@playwright/test"
test("verify add paygrades",async({page})=>{   
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click()
await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await page.locator("//a[@class='oxd-main-menu-item active']").click()
await page .locator("(//li[contains(@class,'oxd-topbar-body-nav-tab --parent')]//span)[2]").click()
await page .locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[2]").click()
await page .locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
await page .locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(grade10)
await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade/6")



})