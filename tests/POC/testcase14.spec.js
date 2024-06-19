const { test, expect } = require('@playwright/test');

test('Place Order: Register while Checkout', async ({ page }) => {
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
  await page.fill('input[placeholder="Name"]', 'Tony');
  await page.fill('input[data-qa="signup-email"]', 'fartboy13@example.com');
  await page.click('button[data-qa="signup-button"]');

  // Complete the registration form
  await page.fill('input[name="password"]', 'password123');
  await page.selectOption('select[name="days"]', '1');
  await page.selectOption('select[name="months"]', '1');
  await page.selectOption('select[name="years"]', '2000');
  await page.fill('input[name="first_name"]', 'Tony');
  await page.fill('input[name="last_name"]', 'Poo');
  await page.fill('input[name="company"]', 'TestCompany');
  await page.fill('input[name="address1"]', '123 Test St');
  await page.fill('input[name="address2"]', 'Apt 4B');
  await page.selectOption('select[name="country"]', 'United States');
  await page.fill('input[name="state"]', 'TestState');
  await page.fill('input[name="city"]', 'TestCity');
  await page.fill('input[name="zipcode"]', '12345');
  await page.fill('input[name="mobile_number"]', '1234567890');
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
  await expect(page.locator('ul[id="address_delivery"] li:nth-child(4)')).toHaveText('123 Test St');
  await expect(page.locator('ul[id="address_delivery"] li:nth-child(4)')).toHaveText('123 Test St');

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