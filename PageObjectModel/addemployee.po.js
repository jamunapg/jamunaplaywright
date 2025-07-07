import { expect } from "@playwright/test"

exports.addEmployeepagee = class addEmployeepagee {

    constructor(page) {

        this.page = page
        this.PIMmenu = page.locator('a:has-text("PIM")')
        this.addEmpmenu = page.locator('a:has-text("Add Employee")')
        this.firstNameinput = page.locator('input[name="firstName"]')
        this.lastNameinput = page.locator('input[name="lastName"]')
        this.saveButton = page.locator('button[type="submit"]')
        this.personaldeatails = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]')

    }
    async navigatetoPIM() {
        //await this.PIMmenu.waitFor({ state: 'visible',timeout:60000 });
        await this.PIMmenu.click()
    }

    async navigatetoSubMenu() {

        //await this.addEmpmenu.waitFor({ state: 'visible', timeout:60000 })
        await this.addEmpmenu.click()
    }

    async createEmployee(firstName, lastName) {

        await this.firstNameinput.fill(firstName)
        await this.lastNameinput.fill(lastName)
    }

    async verifySucces() {

        await expect(this.personaldeatails).toBeVisible()
    }
}