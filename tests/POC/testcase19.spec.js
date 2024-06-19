const { test, expect } = require('@playwright/test');

test('Place Order: Register while Checkout', async ({ page }) => {
      //1. Launch browser
    //2. Navigate to url 'https://automationexercise.com'
    await page.goto("https://automationexercise.com");

    // click on products button
    await page.click('text=Products');

    //verifiy that brands are visible on left side bar
    const brandsVisible = await page.isVisible('.left-sidebar .brands');
    console.log('Brand are visible:', brandsVisible);

    //click on any brand name
    await page.click('text=H&M');

    const brandPageText = await page.textContent('.title.text-center');
    console.log('Navigated to brand page and brand products are displayed:', brandPageText.includes('BRAND - H&M PRODUCTS'));

    await page.click('text=POLO');


    const otherBrandPageText = await page.textContent('.title.text-center');
    console.log('Navigated to other brand page and products are visible:', otherBrandPageText.includes('BRAND - POLO PRODUCTS'));

    

}

);