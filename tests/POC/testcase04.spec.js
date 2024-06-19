const {test, expect} = require('@playwright/test');

test('Testcase 04', async ({page})=>
{
    //1. Launch browser
    //2. Navigate to url 'https://automationexercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();

   //4. Click on sign /login button
   await page.click('a[href="/login"]');

   //5. verify ' New user signup!
   await expect(page.locator('body')).toBeVisible();
   console.log(await page.title());
   await expect(page).toHaveTitle("Automation Exercise - Signup / Login");

   await page.locator("input[data-qa='login-email']").fill("tonyman1@getnada.com");
   await page.locator("input[placeholder='Password']").fill("Fartboy1983!");
 
   await page.click("button[data-qa='login-button']");

   await expect(page.locator("ul[class='nav navbar-nav'] li a b")).toBeVisible();

   await page.click('a[href="/logout"]');

   await expect(page).toHaveTitle("Automation Exercise - Signup / Login");



}

);