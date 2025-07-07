import { test, expect } from '@playwright/test'
import { loginpage } from "../PageObjectModel/loginpage.po"
import logindata from "../testData/login.json"
import { addEmployeepagee } from "../PageObjectModel/addemployee.po"
import addemployeedata from "../testData/login.json"


let page
let login
let addemployee

test.describe("verify login functionality", async () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginpage(page)
        addemployee = new addEmployeepagee(page)
        await login.lounchurl()
        await login.loginwithvalidcreds(logindata.username, logindata.password)
        await login.loginSucces()
    })
    test("verify addemployee", async () => {
        await addemployee.navigatetoPIM()
        await addemployee.navigatetoSubMenu()
        await addemployee.createEmployee(addemployeedata.firstname, addemployeedata.lastname)
        await addemployee.verifySucces()
    })
})