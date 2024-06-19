const { test, expect } = require('@playwright/test');

test('Place Order: Register while Checkout', async ({ page }) => {
      //1. Launch browser
    //2. Navigate to url 'https://automationexercise.com'
    await page.goto("https://automationexercise.com");


    // 3. Add products to cart
 await page.click('a[href="/products"]');
 const firstProduct = page.locator('.productinfo.text-center:has-text("Add to cart")').first();
 await firstProduct.hover();
 await firstProduct.locator('text=Add to cart').click();
 await page.click('text=Continue Shopping');

 // 4. Click 'Cart' button
 await page.click('header[id="header"] li:nth-child(3) a:nth-child(1)');

 // 5. Verify that cart page is displayed
 await expect(page.locator('#cart_items')).toBeVisible();


 await page.locator('.cart_quantity_delete').click();

 
 await expect(page.locator("p[class='text-center'] b")).toBeVisible();

}

);
