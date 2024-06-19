const {test, expect} = require('@playwright/test');

test('Testcase 03', async ({page})=>
{
    //1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();
    
    //4. Click on sign /login button
    await page.click('a[href="/login"]');

    await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
  
    await page.locator("input[data-qa='login-email']").fill("tonyman1@getnada.com");
    await page.locator("input[placeholder='Password']").fill("Fartboy1983(!");

    await page.click("button[data-qa='login-button']");

    await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
}

);