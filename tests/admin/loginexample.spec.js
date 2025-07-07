const { test, expect } = require("@playwright/test")
import { loginpage } from "../admin"
import {logindata} from "../admin"
let page
let login

test.describe("verify login functionality", async () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginpage(page)
        await login.lounchurl()
    })
    test("verify login with vaid credential", async ({ page }) => {
        await login.loginwithvalidcreds(logindata.username, logindata.password)
        await login.loginSucess()
    })
})