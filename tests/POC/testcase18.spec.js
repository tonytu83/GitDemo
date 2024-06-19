const { test, expect } = require('@playwright/test');

test('Place Order: Register while Checkout', async ({ page }) => {
      //1. Launch browser
    //2. Navigate to url 'https://automationexercise.com'
    await page.goto("https://automationexercise.com");


    //3. verify that categories are visible on left side bar.
    const categoriesVisible = await page.isVisible('.left-sidebar.categories');
    console.log('Categories are visible:', categoriesVisible);

    //click on 'Women category'
    await page.click('text=Women');

    //Click on any category link under 'Women' category, for example: Dress
    await page.click('text=Dress');

    //Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'

    const categoryText = await page.textContent('.title.text-center');
    console.log('Category page text:',categoryText.includes('WOMEN - DRESS PRODUCTS'));

    // on left side bar, click on any sub category link of 'Men' category
    const menCategoryText = await page.textContent('body > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)');
    console.log('Men category page text:', menCategoryText.includes('MEN'));

}

);