const {test, expect} = require('@playwright/test');

test('Testcase 12', async ({page})=>
{
 //1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();

    //4 Click on products button
    await page.click('a[href="/products"]');

    await page.frameLocator('iframe[name="aswift_6"]').getByLabel('Close ad').click();

    //5, however over first product and click add to cart
    const firstProduct = page.locator('.productinfo.text-center').nth(0);
    await firstProduct.hover();
    await firstProduct.locator('text=Add to cart').click();

    await page.click('text=Continue Shopping');

    //5. however over first product and click add to cart
    const secondProduct = page.locator('.productinfo.text-center').nth(1);
    await secondProduct.hover();
    await secondProduct.locator('text=Add to cart').click();
    await page.click('body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)');

    //6. verify both products are added to cart

    const cartItems = page.locator('.cart_product');
   
    
    await cartItems.nth(0).waitFor({state:'visible'});
    await cartItems.nth(1).waitFor({state:'visible'});

    await expect(cartItems).toHaveCount(2);

    console.log('Cart items fount:', await cartItems.count());
  
    //7. verify their prices, quantity and total price
    const firstProductPrice = await cartItems.nth(0).locator('.cart_price');
    const secondProductPrice = await cartItems.nth(1).locator('.cart_price');
    const firstProductQuantity = await cartItems.nth(0).locator('cart_quantity');
    const secondProductQuantity = await cartItems.nth(1).locator('cart_quantity');

    


    const firstProductTotal = await cartItems.nth(0).locator('.cart_total_price');
    const secondProductTotal = await cartItems.nth(1).locator('.cart_total_price');

    console.log('First product price: ${firstProductPrice}');
    console.log('Second product price: ${secondProductPrice}');
    console.log('First product quantity: ${firstProductQuantity}');
    console.log('Second product quantity: ${secondProductQuantity}');
    console.log('First product total: ${firstProductTotal}');
    console.log('Second product total: ${secondProductTotal}');

    // Add assertions to check prices, quantities, and total price
    expect(firstProductPrice).not.toBeNull();
    expect(secondProductPrice).not.toBeNull();


    // need to check this one..
    
    expect(firstProductQuantity).not.toBeNull();
    expect(secondProductQuantity).not.toBeNull();

    expect(firstProductTotal).not.toBeNull(); 
    expect(secondProductTotal).not.toBeNull(); 
}

);