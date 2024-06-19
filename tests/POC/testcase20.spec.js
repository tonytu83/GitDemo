const { test, expect } = require('@playwright/test');

test('Place Order: Register while Checkout', async ({ page }) => {
      //1. Launch browser
    //2. Navigate to url 'https://automationexercise.com'
    await page.goto("https://automationexercise.com");

     // click on products button
    await page.click('text=Products');

  //verify user is navigated to all products page successfully
  await page.waitForSelector('text=SEARCHED PRODUCTS');

  //Enter product name is search
  await page.fill('input[name="search"]','POLO');

  await page.click('button[type="submit"]');
  
  //verify 'search products' is visible

  //await page.waitForSelector('text=SEARCHED PRODUCTS');


  const searchResultVisible = await page.isVisible('.features_items');
  console.log('search result are visible:', searchResultVisible);





    // verify all the products related to search are visible


    const products = await page.$$ ('text=Add to cart');

    for (const product of products) {
        await product.click();
    }
    
    await page.click('text=Signup / Login');

    await page.fill('input[name="email"]','tonyman16@getnada.com');

    await page.fill('input[name="password"]','Fartboy1983!');

    await page.click('button[type="submit"]');

    await page.click('text=Cart');

    await page.waitForSelector('text=Shopping Cart');





}
)