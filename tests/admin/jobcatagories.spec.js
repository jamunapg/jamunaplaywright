import{test,expect,} from "@playwright/test"
import data from"../../testData/login.json"
test("verify admin and add jobcatogaries",async({page})=>{   

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill(data.username)
await page.locator("input[type='password']").fill(data.password)
await page.locator("button[type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
await page.locator("//span[normalize-space(text())='Job']").click()
await page.locator("//a[normalize-space(text())='Job Categories']").click()
await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data["job-catogaries-name"])
await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobCategory")











})