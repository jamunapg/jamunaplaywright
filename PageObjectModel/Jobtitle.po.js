import {  expect } from "@playwright/test"

exports.addjobtitle = class addjobtitle {

    constructor(page) {
        
        this.page = page
        this.adminMenu = page.locator('(//a[@class="oxd-main-menu-item"])[1]')
        this.jobSubMenu = page.locator('(//i[@class="oxd-icon bi-chevron-down"])[2]')
        this.jobTitle = page.locator('//a[text()="Job Titles"]')
        this.addBotton = page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.submitjob = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.submitButton = page.locator('[type="submit"]')
        this.verifysuccessDetails = page.locator("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

    }
    async navigatetoadmin() {
        await this.adminMenu.click()
    }
    async navigatetojob() {
        //await this.page.waitForTimeout(60000)
        await this.jobSubMenu.click()
        
    }
    async clickonjobtitle() {
         await this.jobSubMenu.click()
    }
    async clickingtheadd() {
        await this.addBotton.click()
    }
    async fillthejobtitle(jobtitlename) {
        await this.submitjob.fill(jobtitlename)
    }
    async verifysucces() {

        await expect(this.verifysuccessDetails).toBeVisible()
    }

}