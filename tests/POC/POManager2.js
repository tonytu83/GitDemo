// Importing the necessary page objects required for the test
const {AutomationExHomePage} = require('./AutomationExHomePage');
const {AutomationExLoginPage} = require('./AutomationExLoginPage');
const {AutomationExSignupPage} = require('./AutomationExSignupPage');
const {AutomationExCustomerCreationPage} = require('./AutomationExCustomerCreationConfirmationPage');
const { AutomationExDeletePage } = require('./AutomationExDeleteConfirmationPage');
const { AutomationExProductsPage } = require('./AutomationExProductsPage');
const { AutomationExCartPage } = require('./AutomationExCartPage');
const { AutomationExOrderReviewPage} = require('./AutomationExOrderReviewPage');
const { AutomationExPaymentDetailPage} = require('./AutomationExPaymentDetailPage');
const {AutomationExPaymentOrderConfirmationPage} = require('./AutomationExPaymentOrderConfirmationPage');

// Define the Page Object Manager class
class POManager2
{
    // Constructor to initialize the page object manager with the Playwright page instance

constructor(page)
{
    // Store the page instance
    this.page = page;
    this.automationExHomePage = new AutomationExHomePage(this.page);
    this.automationExLoginPage = new AutomationExLoginPage(this.page);
    this.automationExSignupPage = new AutomationExSignupPage(this.page);
    this.automationExCustomerCreationPage = new AutomationExCustomerCreationPage(this.page);
    this.automationExDeletePage = new AutomationExDeletePage(this.page);
    this.automationProductsPage = new AutomationExProductsPage(this.page);
    this.automationCartPage = new AutomationExCartPage(this.page);
    this.automationReviewPage = new AutomationExOrderReviewPage(this.page);
    this.automationPaymentPage = new AutomationExPaymentDetailPage(this.page);
    this.automationPaymentOrderConfirmationPage = new AutomationExPaymentOrderConfirmationPage(this.page);
       
}
 // Getter method to return the Payment Page object
getAutomationPaymentPage()
{
    return this.automationPaymentPage;
}


  // Getter method to return the Review Page object
getAutomationReviewPage()
{
    return this.automationReviewPage;
}
  // Getter method to return the Home Page object

getAutomationExHomePage()
{
    return this.automationExHomePage;
}

 // Getter method to return the Products Page object

getAutomationExProductsPage()
{
    return this.automationProductsPage;
}

  // Getter method to return the Cart Page object

getAutomationCartPage()
{
    return this.automationCartPage;
}
  // Getter method to return the Login Page object

getAutomationExLoginPage()
{
    return this.automationExLoginPage;
}

  // Getter method to return the Signup Page object

getAutomationExSignupPage()
{
    return this.automationExSignupPage;
}

  // Getter method to return the Customer Creation Page object

getAutomationExCustomerCreationPage()
{
    return this.automationExCustomerCreationPage;
}

  // Getter method to return the Delete Confirmation Page object

getAutomationExDeleteConfirmationPage()
{
    return this.automationExDeletePage;
}

  // Getter method to return the Payment Order Confirmation Page object

getAutomationPaymentOrderConfirmationPage()
{
    return this.automationPaymentOrderConfirmationPage;
}

// Export the POManager2 class for use in other files

}
module.exports = {POManager2};