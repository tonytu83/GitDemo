const {AutomationExHomePage} = require('./AutomationExHomePage');
const {AutomationExLoginPage} = require('./AutomationExLoginPage');
const {AutomationExSignupPage} = require('./AutomationExSignupPage');
const {AutomationExCustomerCreationPage} = require('./AutomationExCustomerCreationConfirmationPage');
const { AutomationExDeletePage } = require('./AutomationExDeleteConfirmationPage');


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
}



getAutomationExHomePage()
{
    return this.automationExHomePage;
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

}
module.exports = {POManager2};