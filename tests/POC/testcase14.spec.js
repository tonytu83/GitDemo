const { test, expect } = require('@playwright/test');
const {customtest2} = require('./test-based-auto-data');

customtest2('Place Order: Register while Checkout', async ({ page,testDataForCustomerCreation, testDataForCreditCard}) => {
  // 1. Launch browser and navigate to the URL
  await page.goto('http://automationexercise.com');

  // 2. Verify that home page is visible successfully
  await expect(page).toHaveTitle(/Automation Exercise/);

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

  // 7. Click 'Register / Login' button
  await page.click('body > section:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)');

  // 8. Fill in details in Signup and create account
  await page.fill('input[placeholder="Name"]', testDataForCustomerCreation.fname);
  await page.fill('input[data-qa="signup-email"]', testDataForCustomerCreation.username);
  await page.click('button[data-qa="signup-button"]');

  // Complete the registration form
  await page.fill('input[name="password"]', testDataForCustomerCreation.password);
  await page.selectOption('select[name="days"]', testDataForCustomerCreation.day);
  await page.selectOption('select[name="months"]', testDataForCustomerCreation.month);
  await page.selectOption('select[name="years"]', testDataForCustomerCreation.year);
  await page.fill('input[name="first_name"]', testDataForCustomerCreation.fname);
  await page.fill('input[name="last_name"]', testDataForCustomerCreation.lname);
  await page.fill('input[name="company"]', testDataForCustomerCreation.company);
  await page.fill('input[name="address1"]', testDataForCustomerCreation.address);
  await page.selectOption('select[name="country"]', testDataForCustomerCreation.country);
  await page.fill('input[name="state"]', testDataForCustomerCreation.state);
  await page.fill('input[name="city"]', testDataForCustomerCreation.suburb);
  await page.fill('input[name="zipcode"]', testDataForCustomerCreation.postcode);
  await page.fill('input[name="mobile_number"]', testDataForCustomerCreation.phone);
  await page.click('button:has-text("Create Account")');

  // 9. Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await expect(page.locator('h2[class="title text-center"] b')).toBeVisible();
  await page.click('.btn.btn-primary');

  // 10. Verify 'Logged in as username' at top
  await expect(page.locator('text=Logged in as Tony')).toBeVisible();

  // 11. Click 'Cart' button
  await page.click('header[id="header"] li:nth-child(3) a:nth-child(1)');

  // 12. Click 'Proceed To Checkout' button
  await page.click('.btn.btn-default.check_out');

  // 13. Verify Address Details and Review Your Order
  await expect(page.locator('ul[id="address_delivery"] li[class="address_firstname address_lastname"]')).toHaveText('. Tony Poo');
  await expect(page.locator('ul[id="address_delivery"] li:nth-child(4)')).toHaveText(testDataForCustomerCreation.address);


  // 14. Enter description in comment text area and click 'Place Order'
  await page.fill('textarea[name="message"]', 'Please deliver between 9 AM and 5 PM.');
  await page.click('ul[id="address_delivery"] li:nth-child(4)');

   // 12. Click 'Proceed To Checkout' button
   await page.click('.btn.btn-default.check_out');

  // 15. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  await page.fill("input[name='name_on_card']", testDataForCreditCard.nameoncard);
  await page.fill("input[name='card_number']", testDataForCreditCard.cardnumber);
  await page.fill("input[placeholder='ex. 311']", testDataForCreditCard.cvc);
  await page.fill("input[placeholder='MM']", testDataForCreditCard.expirymonth);
  await page.fill("input[placeholder='YYYY']", testDataForCreditCard.expiryyear);

  // 16. Click 'Pay and Confirm Order' button
  await page.click('#submit');

  // 17. Verify success message 'Your order has been placed successfully!'
  await expect(page.locator('text=Congratulations! Your order has been confirmed!')).toBeVisible();


  


  // 18. Click 'Delete Account' button
  //await page.click('a[href="/delete_account"]');

  // 19. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  //await expect(page.locator('h2:has-text("ACCOUNT DELETED!")')).toBeVisible();
 // await page.click('.btn.btn-primary');
});