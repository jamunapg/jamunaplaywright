import { test, expect } from "@playwright/test"

exports.addpaygredes = class addpaygredes {

    constructor(page) {
        this.page = page
        this.gotoadmin = page.locator('//span[text()="Admin"]')
        this.clickjob = page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[1]')
        this.selectpaygredes = page.locator('//a[text()="Pay Grades"]')
        this.clickadd = page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.fillthebox = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.clicksave = page.locator('[type="submit"]')

    }
    async gotopaygredes() {
        await this.gotoadmin.click()
        await this.clickjob.click()
        await this.selectpaygredes.click()
        await this.clickadd.click()
        await this.fillthebox.fill(paygradesdata.paygrede)
        await this.clicksave.click()
    }
}