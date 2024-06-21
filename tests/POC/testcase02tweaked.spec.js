const {test,expect} = require('@playwright/test');
const {customtest2} = require('./test-based-auto-data');
const {POManager2} = require('./POManager2');

test('Testcase 02', async ({page})=>
{
    const poManager2 = new POManager2(page);
    
    const automationExHomePage = poManager2.getAutomationExHomePage();

    await automationExHomePage.goTo();

    await automationExHomePage.verifyHomePage(expect);
  
    await automationExHomePage.clickOnLogin();
  
    const automationLoginPage = poManager2.getAutomationExLoginPage();

    await automationLoginPage.verifyLoginPage(expect);
    
    await automationLoginPage.fillLoginDetails(testDataForCustomerCreation.fname,testDataForCustomerCreation.username);

    await automationLoginPage.clickOnSignup();


    const automationSignupPage = poManager2.getAutomationExSignupPage();

    await automationSignupPage.verifyautomationExSignupPage(expect);

    await automationSignupPage.fillCustomerDetails(testDataForCustomerCreation.gender, testDataForCustomerCreation.password,testDataForCustomerCreation.day,
        testDataForCustomerCreation.month, testDataForCustomerCreation.year, testDataForCustomerCreation.fname, 
        testDataForCustomerCreation.lname, testDataForCustomerCreation.company, testDataForCustomerCreation.address,
        testDataForCustomerCreation.country, testDataForCustomerCreation.state, testDataForCustomerCreation.suburb,
        testDataForCustomerCreation.postcode, testDataForCustomerCreation.phone);

    await automationSignupPage.clickOnSignup();
    
    const automationExCustomerCreationPage = poManager2.getAutomationExCustomerCreationPage();
    await automationExCustomerCreationPage.verifyCustomerCreationPage(expect);
    await automationExCustomerCreationPage.clickcontinuebutton();
    
    await automationExHomePage.clickOnLogout();
    await automationExHomePage.clickOnLogin();

    await automationLoginPage.verifyLoginPage(expect);
    await automationLoginPage.fillLoginDetails(testDataForCustomerCreation.username,testDataForCustomerCreation.password);
    await automationLoginPage.clickOnLogin()
    await automationExHomePage.verifyUser();

    await automationExHomePage.clickOnDelete();

    const automationDeletePage = poManager2.getAutomationExDeleteConfirmationPage();
    await automationDeletePage.continueButton()
 
}

);