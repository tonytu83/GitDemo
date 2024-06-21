const {test, expect} = require('@playwright/test');
const {customtest2} = require('./test-based-auto-data');


customtest2('Testcase01', async ({page,testDataForCustomerCreation})=>
{
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
    await page.locator("input[placeholder='Name']").fill(testDataForCustomerCreation.fname);
    await page.locator("input[data-qa='signup-email']").fill(testDataForCustomerCreation.username);
 
    //7. Click 'Signip' button
    await page.click("button[data-qa='signup-button']");
//test
    
   //8. //get title - assertion
   console.log(await page.title());
   await expect(page).toHaveTitle("Automation Exercise - Signup");

    //9. Fill details: Title, Name, Email, Password, Date of birth
    await page.check('#id_gender1');
    await page.locator("#password").fill(testDataForCustomerCreation.password);
    const dropdownDay = page.locator("#days");
    await dropdownDay.selectOption(testDataForCustomerCreation.day);
    const dropdownMonth = page.locator("#months");
    await dropdownMonth.selectOption(testDataForCustomerCreation.month);
    const dropdownYear = page.locator("#years");
    await dropdownYear.selectOption(testDataForCustomerCreation.year);
 
    //10. checkbox newsletter
    await page.locator("#newsletter").click();
    //11. checkbox special offers
    await page.locator("#optin").click();
    //12. fill in address details
    await page.locator("#first_name").fill(testDataForCustomerCreation.fname);
    await page.locator("#last_name").fill(testDataForCustomerCreation.lname);
    await page.locator("#company").fill(testDataForCustomerCreation.company);
    await page.locator("#address1").fill(testDataForCustomerCreation.address);
    const dropdownCountry = page.locator("#country");
    await dropdownCountry.selectOption(testDataForCustomerCreation.country);
    await page.locator("#state").fill(testDataForCustomerCreation.state);
    await page.locator("#city").fill(testDataForCustomerCreation.suburb);
    await page.locator("#zipcode").fill(testDataForCustomerCreation.postcode);
    await page.locator("#mobile_number").fill(testDataForCustomerCreation.phone);
    //13. click on create account
    await page.click("button[data-qa='create-account']");

    //14. verify that Account created text is visible
    await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();

    //15. Click on continue
    await page.click(".btn.btn-primary");

    //16. Delete Account
   // await page.click("a[href='/delete_account']");

    //17. verify that Account Delete text is visible
    //await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible();

    //18. Click on continue
   // await page.click(".btn.btn-primary");

    }

);


