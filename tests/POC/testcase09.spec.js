const {test, expect} = require('@playwright/test');

test('Testcase 09', async ({page})=>
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


     //6 Click on products button
     await page.click('a[href="/products"]');

     //await page.frameLocator('iframe[name="aswift_1"]').getByLabel('Close ad').click();



    //7 search product
    await page.locator("#search_product").fill("frozen");
    await page.click('.fa.fa-search');
    
    await expect(page.locator("a[href='/product_details/13']")).toBeVisible();


}

);