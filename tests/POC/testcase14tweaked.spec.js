const {test,expect} = require('@playwright/test');
const {customtest2} = require('./test-based-auto-data');
const {POManager2} = require('./POManager2');
const { AutomationExLoginPage } = require('./AutomationExLoginPage');

customtest2('Place Order: Register while Checkout', async ({page,testDataForCustomerCreation,testDataForCreditCard}) => {
  // 1. Launch browser and navigate to the URL
 
  const poManager2 = new POManager2(page);
    
    const automationExHomePage = poManager2.getAutomationExHomePage();

    await automationExHomePage.goTo();

  // 2. Verify that home page is visible successfully
    await automationExHomePage.verifyHomePage(expect);
 

 // 3. click on products page

  await automationExHomePage.clickOnProductsPage();

  const automationProductsPage = poManager2.getAutomationExProductsPage();

// verify product page
  await automationProductsPage.verifyProductPage(expect);

  //add first product to cart
  await automationProductsPage.selectFirstProduct();
 
  //add second product to cart
  await automationProductsPage.selectSecondProduct();
 
  // 4. Click 'Cart' button
  await automationProductsPage.clickCartButton();

  // 5. Verify that cart page is displayed
  const automationCartPage = poManager2.getAutomationCartPage();
  await automationCartPage.verifyCartPage(expect);

  // 6. Click 'Proceed To Checkout' button
  await automationCartPage.clickcheckoutbutton();
 
  // 7. Click 'Register / Login' button
  await automationCartPage.registerloginbutton();

  // 8. Fill in details in Signup and create account
  const automationLoginPage = poManager2.getAutomationExLoginPage();
  await automationLoginPage.fillLoginDetails(testDataForCustomerCreation.fname,testDataForCustomerCreation.username);
  await automationLoginPage.clickOnSignup();
  
  // Complete the registration form
  const automationSignupPage = poManager2.getAutomationExSignupPage();
  await automationSignupPage.fillCustomerDetails(testDataForCustomerCreation.gender, testDataForCustomerCreation.password,testDataForCustomerCreation.day,
    testDataForCustomerCreation.month, testDataForCustomerCreation.year, testDataForCustomerCreation.fname, 
    testDataForCustomerCreation.lname, testDataForCustomerCreation.company, testDataForCustomerCreation.address,
    testDataForCustomerCreation.country, testDataForCustomerCreation.state, testDataForCustomerCreation.suburb,
    testDataForCustomerCreation.postcode, testDataForCustomerCreation.phone);

  //click on signup page
await automationSignupPage.clickOnSignup();

const automationExCustomerCreationPage = poManager2.getAutomationExCustomerCreationPage();
await automationExCustomerCreationPage.verifyCustomerCreationPage(expect);
//await automationExCustomerCreationPage.clickcontinuebutton();

 // 10. Verify 'Logged in as username' at top
 // await expect(page.locator('text=Logged in as Tony')).toBeVisible();
await automationExHomePage.verifyUser(expect);


  // 11. Click 'Cart' button
  await automationExHomePage.clickOnCart();

 // verify cart page
  await automationCartPage.verifyCartPage(expect);

  // 12. Click 'Proceed To Checkout' button
  await automationCartPage.proceedtocheckout();



  // 13. Verify Address Details and Review Your Order
 const automationReviewPage = poManager2.getAutomationReviewPage();
 await automationReviewPage.verifyReviewPage(expect);


  // 14. Enter description in comment text area and click 'Place Order'
 // 12. Click 'Proceed To Checkout' button

  await automationReviewPage.populateOrderMessage();

  await automationReviewPage.continue();


   // 15. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    const automationpaymentpage = poManager2.getAutomationPaymentPage();
   // await automationpaymentpage.verifyPaymentPage(expect);
   await automationpaymentpage.fillCreditCardDetails(testDataForCreditCard.nameoncard,testDataForCreditCard.cardnumber,
    testDataForCreditCard.cvc,testDataForCreditCard.expirymonth,testDataForCreditCard.expiryyear);

      // 16. Click 'Pay and Confirm Order' button
      await automationpaymentpage.submitpaymentforOrder();
  

  // 17. Verify success message 'Your order has been placed successfully!'
const automationPaymentOrderConfirmationPage = poManager2.getAutomationPaymentOrderConfirmationPage();
await automationPaymentOrderConfirmationPage.verifyOrderPage(expect);


await automationExHomePage.clickOnDelete();
  // 18. Click 'Delete Account' button

  // 19. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  const automationDeletePage = poManager2.getAutomationExDeleteConfirmationPage();
  await automationDeletePage.verifyDeleteConfirmationPage(expect)
  await automationDeletePage.continueButton()
 


  

}

);