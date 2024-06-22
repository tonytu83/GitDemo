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




class POManager2
{
constructor(page)
{
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

getAutomationPaymentPage()
{
    return this.automationPaymentPage;
}

getAutomationReviewPage()
{
    return this.automationReviewPage;
}



getAutomationExHomePage()
{
    return this.automationExHomePage;
}

getAutomationExProductsPage()
{
    return this.automationProductsPage;
}

getAutomationCartPage()
{
    return this.automationCartPage;
}


getAutomationExLoginPage()
{
    return this.automationExLoginPage;
}



getAutomationExSignupPage()
{
    return this.automationExSignupPage;
}

getAutomationExCustomerCreationPage()
{
    return this.automationExCustomerCreationPage;
}

getAutomationExDeleteConfirmationPage()
{
    return this.automationExDeletePage;
}


getAutomationPaymentOrderConfirmationPage()
{
    return this.automationPaymentOrderConfirmationPage;
}

}
module.exports = {POManager2};