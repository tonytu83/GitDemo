const {test, expect} = require('@playwright/test');

test('Testcase 08', async ({page})=>
{
   //1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();
    
    //4. Click on products button
    await page.click('a[href="/products"]');

    //5. All products page successful
    await expect(page.locator('text=ALL PRODUCTS')).toBeVisible();


     //4. Click on products button
     await page.click('a[href="/products"]');


      //4. Click on home button
    await page.click('header[id="header"] li:nth-child(1) a:nth-child(1)');
}

);