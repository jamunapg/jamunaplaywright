import{test,expect,} from "@playwright/test"
test("verify admin and add job title", async ({page}) =>{   
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("(//input[@class='oxd-input oxd-input--active'])[1]").fill("Admin")
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("admin123")
await page.locator("button[type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await page.locator("//a[@class='oxd-main-menu-item active']").click()
await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]")
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("financestatus1")
await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
await page .locator("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveEmploymentStatus")
})