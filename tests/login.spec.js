import { test, expect } from '@playwright/test'
import { loginpage } from "../PageObjectModel/loginpage.po"
import logindata from "../testData/login.json"


let page
let login

test.describe("verify login functionality", async () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginpage(page)
        await login.lounchurl()
    })
    test("verifylogin with valid credential", async ({ page }) => {
        await login.loginwithvalidcreds(logindata.username, logindata.password)
        await login.loginSucces()
    })
    test("verifylogin with valid username invalidpassword", async ({ page }) => {
        await login.loginwithvalidcreds(logindata.username, logindata.wrongpassword)
        await login.loginErr()
    })
    test("verifylogin with invalid username validpassword", async ({ page }) => {
        await login.loginwithvalidcreds(logindata.wrongusername, logindata.password)
        await login.loginErr()
    })
    test("verifylogin with invalid username invalidpassword", async ({ page }) => {
        await login.loginwithvalidcreds(logindata.wrongusername, logindata.wrongpassword)
        await login.loginErr()
    })

}) 
