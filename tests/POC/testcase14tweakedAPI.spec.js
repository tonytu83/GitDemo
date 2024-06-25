// Importing necessary modules from Playwright
const {test, expect, request} = require('@playwright/test');
// Importing custom test data and page objects
const {customtest2} = require('./test-based-auto-data');
const {POManager2} = require('./POManager2');



test.beforeAll(async({browser, testDataForExistingCustomer})=>
{
  const context = await browser.newContext();
  
  const poManager2 = new poManager2(context);
  const automationExHomePage = poManager2.getAutomationExHomePage();
  await automationExHomePage.goTo();
  // 2. Verify that home page is visible successfully
  await automationExHomePage.verifyHomePage(expect);
  await automationExHomePage.clickOnLogin();
  const automationExLoginPage = poManager2.getAutomationExLoginPage();
  await automationExLoginPage.verifyLoginPage(expect);
  await automationExLoginPage.fillExistingLoginDetails(testDataForExistingCustomer.username, testDataForExistingCustomer.password)
  await automationExLoginPage.clickOnLogin();
  await context.storageState({path: 'state.json'});


})


// Define a custom test with a descriptive name
customtest2('Place Order: Register while Checkout', async ({page, testDataForCreditCard}) => {
  // 1. Launch browser and navigate to the URL



  // 3. Click on products page
  await automationExHomePage.clickOnProductsPage();
  const automationProductsPage = poManager2.getAutomationExProductsPage();

  // Verify product page
  await automationProductsPage.verifyProductPage(expect);

  // Add first product to cart
  await automationProductsPage.selectFirstProduct();

  // Add second product to cart
  await automationProductsPage.selectSecondProduct();

  // 4. Click 'Cart' button
  await automationProductsPage.clickCartButton();

  // 5. Verify that cart page is displayed
  const automationCartPage = poManager2.getAutomationCartPage();
  await automationCartPage.verifyCartPage(expect);

  // 6. Click 'Proceed To Checkout' button
  await automationCartPage.clickcheckoutbutton();


  // 13. Verify Address Details and Review Your Order
  const automationReviewPage = poManager2.getAutomationReviewPage();
  await automationReviewPage.verifyReviewPage(expect);

  // 14. Enter description in comment text area and click 'Place Order'
  await automationReviewPage.populateOrderMessage();
  await automationReviewPage.continue();

  // 15. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  const automationpaymentpage = poManager2.getAutomationPaymentPage();
  await automationpaymentpage.fillCreditCardDetails(
    testDataForCreditCard.nameoncard, 
    testDataForCreditCard.cardnumber,
    testDataForCreditCard.cvc,
    testDataForCreditCard.expirymonth,
    testDataForCreditCard.expiryyear
  );

  // 16. Click 'Pay and Confirm Order' button
  await automationpaymentpage.submitpaymentforOrder();

  // 17. Verify success message 'Your order has been placed successfully!'
  const automationPaymentOrderConfirmationPage = poManager2.getAutomationPaymentOrderConfirmationPage();
  await automationPaymentOrderConfirmationPage.verifyOrderPage(expect);

  // 18. Click 'Delete Account' button
  //await automationExHomePage.clickOnDelete();

  // 19. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  //const automationDeletePage = poManager2.getAutomationExDeleteConfirmationPage();
  //await automationDeletePage.verifyDeleteConfirmationPage(expect);
  //await automationDeletePage.continueButton();
});