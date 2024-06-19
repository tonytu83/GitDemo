const { test, expect } = require('@playwright/test');

test('Place Order: Register while Checkout', async ({ page }) => {
   //1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();
    
    //4. Click on sign /login button
    await page.click('a[href="/login"]');

    //5. verify ' New user signup!
    await expect(page.locator('body')).toBeVisible();
    console.log(await page.title());
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
    
    //6. Enter name and email address
    await page.locator("input[placeholder='Name']").fill("Tony");
    await page.locator("input[data-qa='signup-email']").fill("tonyman16@getnada.com");
 
    //7. Click 'Signip' button
    await page.click("button[data-qa='signup-button']");

    
   //8. //get title - assertion
   console.log(await page.title());
   await expect(page).toHaveTitle("Automation Exercise - Signup");


    //9. Fill details: Title, Name, Email, Password, Date of birth
    await page.check('#id_gender1');
    await page.locator("#password").fill("Fartboy1983!");
    const dropdownDay = page.locator("#days");
    await dropdownDay.selectOption("30");
    const dropdownMonth = page.locator("#months");
    await dropdownMonth.selectOption("December");
    const dropdownYear = page.locator("#years");
    await dropdownYear.selectOption("1983");
 
    //10. checkbox newsletter
    await page.locator("#newsletter").click();
    //11. checkbox special offers
    await page.locator("#optin").click();
    //12. fill in address details
    await page.locator("#first_name").fill("Tony");
    await page.locator("#last_name").fill("Poo");
    await page.locator("#company").fill("Cognizant");
    await page.locator("#address1").fill("73 Leonard Avenue");
    const dropdownCountry = page.locator("#country");
    await dropdownCountry.selectOption("Australia");
    await page.locator("#state").fill("VIC");
    await page.locator("#city").fill("Noble Park");
    await page.locator("#zipcode").fill("3174");
    await page.locator("#mobile_number").fill("0433552112");
    //13. click on create account
    await page.click("button[data-qa='create-account']");

    //14. verify that Account created text is visible
    await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();

    //15. Click on continue
    await page.click(".btn.btn-primary");

    // 3. Add products to cart
  await page.click('a[href="/products"]');
  const firstProduct = page.locator('.productinfo.text-center:has-text("Add to cart")').first();
  await firstProduct.hover();
  await firstProduct.locator('text=Add to cart').click();
  await page.click('text=Continue Shopping');

  // Add another product to the cart if needed
  const secondProduct = page.locator('.productinfo.text-center:has-text("Add to cart")').nth(1);
  await secondProduct.hover();
  await secondProduct.locator('text=Add to cart').click();
  await page.click('text=Continue Shopping');

  // 4. Click 'Cart' button
  await page.click('header[id="header"] li:nth-child(3) a:nth-child(1)');

  // 5. Verify that cart page is displayed
  await expect(page.locator('#cart_items')).toBeVisible();

  // 6. Click 'Proceed To Checkout' button
  await page.click('.btn.btn-default.check_out');



  // 11. Click 'Cart' button
  await page.click('header[id="header"] li:nth-child(3) a:nth-child(1)');

  // 12. Click 'Proceed To Checkout' button
  await page.click('.btn.btn-default.check_out');

  // 13. Verify Address Details and Review Your Order
  await expect(page.locator('ul[id="address_delivery"] li[class="address_firstname address_lastname"]')).toHaveText('Mr. Tony Poo');
  await expect(page.locator('ul[id="address_delivery"] li:nth-child(4)')).toHaveText('73 Leonard Avenue');
  

  // 14. Enter description in comment text area and click 'Place Order'
  await page.fill('textarea[name="message"]', 'Please deliver between 9 AM and 5 PM.');
  await page.click('ul[id="address_delivery"] li:nth-child(4)');

   // 12. Click 'Proceed To Checkout' button
   await page.click('.btn.btn-default.check_out');

  // 15. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  await page.fill("input[name='name_on_card']", 'Test User');
  await page.fill("input[name='card_number']", '4111111111111111');
  await page.fill("input[placeholder='ex. 311']", '123');
  await page.fill("input[placeholder='MM']", '12');
  await page.fill("input[placeholder='YYYY']", '2025');

  // 16. Click 'Pay and Confirm Order' button
  await page.click('#submit');

  // 17. Verify success message 'Your order has been placed successfully!'
  await expect(page.locator('text=Congratulations! Your order has been confirmed!')).toBeVisible();


  


  // 18. Click 'Delete Account' button
  await page.click('a[href="/delete_account"]');

  // 19. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await expect(page.locator('h2:has-text("ACCOUNT DELETED!")')).toBeVisible();
  await page.click('.btn.btn-primary');

});