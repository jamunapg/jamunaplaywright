import { test, expect } from '@playwright/test';

test("verify different browsers and scripts", async ({ page, browserName }) => {
    switch (browserName) {
        case "webkit":
            await page.goto("https://www.meesho.com/");

            break;


        case "firefox":
            await page.goto("https://www.zeptonow.com/");

            break;

        case "chromium":
            await page.goto("https://www.lifestylestores.com/")

            break;

        default: {
            console.log("not varify browser matching")
        }
            break;

    }









})

test("Based on ENV different scrpts", async ({ page }) => {

    switch (process.env.ENV) {
        case "qa":
            await page.goto("https://www.flipkart.com/");
            //await page.close()
            break;

        case "staging":
            await page.goto("https://www.amazon.in/");
            //await page.close()
            break;

        case "cert":
            await page.goto("https://www.lifestylestores.com/");
            break;

        default: {
            console.log("no of env matching")
        }
    }



})