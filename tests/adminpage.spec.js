import { test, expect } from "@playwright/test"
import { jobmenu } from "../PageObjectModel/admin.po"
import logindata from "../testData/login.json"
import { before, beforeEach } from "node:test"

let page
let login
let job

test.describe("test verify jobtitle", async () => {
    test.beforeEach, (async ({ browser }) => {
        page = await browser.newPage()
        login = new loginpage(page)
        job = new jobmenu(page)
        await login.lounchurl()
        await login.loginwithvalidcreds(logindata.username, logindata.password)
        await login.loginSucces()
    })
    test("verify new jobtitles", async () => {
        await job.admininput()
        await job.jobinput()
        await job.jobtitleinput()
        await job.addbuttoninput(logindata.jobtitlename)
        await job.savebutton()
    })
})