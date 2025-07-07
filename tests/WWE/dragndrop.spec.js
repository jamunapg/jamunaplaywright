import {test,expect} from "@playwright/test"
test("verify drogndrop example",async ({page})=>{
   await page.goto("https://demo.automationtesting.in/Static.html")
//    await page.locator('[id="angular"]').dragTo(page.locator('[id="droparea"]'))
//    await page.locator('(//img[@id="mongo"])[1]').dragTo(page.locator('[id="droparea"]'))
//    await page.locator('(//img[@id="node"])[1]').dragTo(page.locator('[id="droparea"]'))

   const sourceAngular = await page.locator('[id="angular"]')
   const sourceMango = await page.locator('(//img[@id="mongo"])[1]')
   const sourceNode = await page.locator('(//img[@id="node"])[1]')

   const targetImages = await page.locator ('[id="droparea"]')

   await sourceAngular.dragTo(targetImages)
   await sourceMango.dragTo(targetImages)
   await sourceNode.dragTo(targetImages)
   





})