import { test, excpect } from "@playwright/test"
import logindata from "../testData/login.json"
import { loginpage } from "../PageObjectModel/loginpage.po"
import { addjobtitle } from "../PageObjectModel/Jobtitle.po"



test.describe("verify add jobtitle", async () => {

    let page
    let login
    let clickOnjobtitle
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginpage(page)
        clickOnjobtitle = new addjobtitle(page)
        await login.lounchurl()
        await login.loginwithvalidcreds(logindata.username, logindata.password)
        await login.loginSucces()
    })
    test("verify jobtitle", async () => {
        await clickOnjobtitle.navigatetoadmin()
        await clickOnjobtitle.navigatetojob()
        await clickOnjobtitle.clickonjobtitle()
        await clickOnjobtitle.clickingtheadd()
        await clickOnjobtitle.fillthejobtitle(addjobtitle.jobtitlename)
        await clickOnjobtitle.verifysucces()
    })
})