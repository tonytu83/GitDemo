const {test, expect} = require('@playwright/test');

test('Testcase 13', async ({page})=>
{
    //1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();

    //4 Click on products button
    await page.click('a[href="/products"]');

   // await page.frameLocator('iframe[name="aswift_6"]').getByLabel('Close ad').click();

    const viewProductButton = page.locator('a[href="/product_details/1"]').click();

    await expect(page.locator('.product-information')).toBeVisible();

    const quantityInput = page.locator('input[name="quantity"]');
    await quantityInput.fill('4');

    await page.click('button:has-text("Add to cart")');

    const cartQuantityInput = page.locator('#quantity').first();

    await expect(cartQuantityInput).toHaveValue('4');



}

);