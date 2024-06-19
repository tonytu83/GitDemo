const {test, expect} = require('@playwright/test');

test('Testcase 06', async ({page})=>
{
    //1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();
    
        //4. Click on sign /login button
        await page.click('a[href="/test_cases"]');

         // Verify that home page is visible successfully
         await expect(page).toHaveTitle("Automation Exercise");


}

);