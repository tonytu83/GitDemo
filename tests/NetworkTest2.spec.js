const { test, expect } = require('@playwright/test');



test('@Security test request intercept', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("tonyman1@getnada.com");
    await page.locator("#userPassword").fill("Dickman01!");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();

    //login & reach order page
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6617442aa86f8f74dcbd2a3z' }));
    await page.locator("button:has-text('view')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

});