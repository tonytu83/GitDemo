const {test,expect} = require('@playwright/test');
const {customtest2} = require('./test-based-auto-data');
const {POManager2} = require('./POManager2');



customtest2('Testcase01', async ({page,testDataForCustomerCreation})=>
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

    await automationSignupPage.fillCustomerDetails(testDataForCustomerCreation.password);

    await automationSignupPage.clickOnSignup();
    

    
    //3. Verify that home page is visible successfully
   
    
    //4. Click on sign /login button
   

    //5. verify ' New user signup!
 
    
    //6. Enter name and email address
  
    //7. Click 'Signip' button

    
   //8. //get title - assertion
  

    //9. Fill details: Title, Name, Email, Password, Date of birth
   
    //13. click on create account
   

    //14. verify that Account created text is visible
    await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();

    //15. Click on continue
    await page.click(".btn.btn-primary");

 

    }

);


