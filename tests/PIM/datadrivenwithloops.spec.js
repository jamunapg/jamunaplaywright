// import{text, expect} from "@playwrighttest";

// // const jobtitles=["jamuna","anjali","tejaswini"]
// // for(let title of jobtitles){
//  jobtitle.forEach (title =>{
    import { test, expect } from '@playwright/test';

const jobtitles = ["jamuna", "anjali", "tejaswini"];

for (const title of jobtitles) {
  test(`Check job title: ${title}`, async ({ page }) => {
    //await page.goto('https://example.com'); // Replace with your URL
    // Use the title in your test
    await page.fill('#job-title-input', title); // Replace selector accordingly
    await expect(page.locator('#job-title-input')).toHaveValue(title);
 



test(`example of looping test data -DDT -${title}` , async ({page}) =>{
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 await page.locator("input[name='username']").fill("Admin")
 await page.locator("input[type='password']").fill("admin123")
 await page.locator("button[type='submit']").click()
 await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
 await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
 await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
 await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
 await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
 let randomtext=(Math.random()+ 1).toString(36).substring(7);
 await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(title+randomtext)
 await page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[2]").click()
 await expect (page) .toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveEmploymentStatus")
 

 }) 
  }_
// import { test, expect } from '@playwright/test';

// const jobtitles = ["jamuna", "anjali", "tejaswini"];

// for (const title of jobtitles) {
//   test(`Check job title: ${title}`, async ({ page }) => {
//     await page.goto('https://example.com'); // Replace with your URL
//     // Use the title in your test
//     await page.fill('#job-title-input', title); // Replace selector accordingly
//     await expect(page.locator('#job-title-input')).toHaveValue(title);
//   });
// }
