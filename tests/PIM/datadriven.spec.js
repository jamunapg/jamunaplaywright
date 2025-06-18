import { test, expect } from '@playwright/test';
import { title } from 'process';
const jobtitle={

 jobtitle1: "CEO",
    jobtitle2: "CFO",
    jobtitle3: "CFFO",
    jobtitle4: "CMO"
}

for (let title in jobtitles){

test(`looping data-DOT-${jobtitles[title]}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Username' }).fill('A');
    await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    await page.getByText('Job', { exact: true }).click();
    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    await page.getByRole('row', { name: ' Account Assistant  ' }).locator(jobtitles[title]+label ).click();
    await page.getByRole('row', { name: ' CEOtec89 job description  ' }).locator(jobtitles[title]+label).click();
    await page.getByRole('row', { name: ' CFOlp0zd job description  ' }).locator(jobtitles[title]+label).click();
    await page.getByRole('row', { name: ' Chief Executive Officer  ' }).locator(jobtitles[title]+label).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('engineer');
    await page.getByRole('textbox', { name: 'Type description here' }).click();
    await page.getByRole('textbox', { name: 'Type description here' }).fill('abc');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');


})
}
;

//test (`verify multiple jobtitle one testcase -dot-${jobtitles[title]}` , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123") 
    await page.locator("button[type='submit']").click();
    await page.locator("//span[text()='Dashboard']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
    await page.locator("//a[normalize-space(text())='Add Employee']").click();
    await page.locator("(//input[contains(@class,'oxd-input oxd-input--active')])[2]").fill("jamuna")
    await page.locator("//input[@placeholder='Last Name']").fill("G")
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("0237")
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/363")

//})