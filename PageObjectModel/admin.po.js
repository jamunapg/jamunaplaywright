import {test,expect} from "@playwright/test"

exports.jobmenu = class jobmenu{
    constructor(page){
        this.page= page
        this.admininput = page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]')
        this.jobinput = page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]')
        this.jobtitleinput = page.locator('//a[text()="Job Titles"]')
        this.addbuttoninput = page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.addtitleinput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.savebutton = page.locator("//button[@type='submit']")
    
    }

    async addtojobtitles (page){
        await this.admininput.click()
        await this.jobinput.click()
        await this.jobtitleinput.click()
        await this.addbuttoninput.fill(jobtitlename)
        await this.savebutton.click()
    }
}