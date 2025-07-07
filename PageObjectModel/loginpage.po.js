import { expect } from "@playwright/test"

exports.loginpage = class loginpage {
    constructor(page) {
        this.page = page
        this.usernameinput = page.locator('//input[@name="username"]')
        this.passwordinput = page.locator('//input[@type="password"]')
        this.loginbutton = page.locator('//button[@type="submit"]')
        this.logo = page.locator('img[alt="company-branding"]')
        this.errorinput = page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
    }

    async lounchurl() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    async loginwithvalidcreds(username, password) {
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.loginbutton.click()
    }
    async loginErr() {
        await expect(this.errorinput).toBeVisible()
    }
    async loginSucces() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }
}
