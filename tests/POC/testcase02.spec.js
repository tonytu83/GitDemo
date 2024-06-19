const {test, expect} = require('@playwright/test');

test('Testcase 02', async ({page})=>
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
  await page.locator("input[placeholder='Name']").fill("Tony");
  await page.locator("input[data-qa='signup-email']").fill("tonyman1@getnada.com");

  //7. Click 'Signip' button
  await page.click("button[data-qa='signup-button']");

  
 //8. //get title - assertion
 console.log(await page.title());
 await expect(page).toHaveTitle("Automation Exercise - Signup");


  //9. Fill details: Title, Name, Email, Password, Date of birth
  await page.check('#id_gender1');
  await page.locator("#password").fill("Fartboy1983!");
  const dropdownDay = page.locator("#days");
  await dropdownDay.selectOption("30");
  const dropdownMonth = page.locator("#months");
  await dropdownMonth.selectOption("December");
  const dropdownYear = page.locator("#years");
  await dropdownYear.selectOption("1983");

  //10. checkbox newsletter
  await page.locator("#newsletter").click();
  //11. checkbox special offers
  await page.locator("#optin").click();
  //12. fill in address details
  await page.locator("#first_name").fill("Tony");
  await page.locator("#last_name").fill("Poo");
  await page.locator("#company").fill("Cognizant");
  await page.locator("#address1").fill("73 Leonard Avenue");
  const dropdownCountry = page.locator("#country");
  await dropdownCountry.selectOption("Australia");
  await page.locator("#state").fill("VIC");
  await page.locator("#city").fill("Noble Park");
  await page.locator("#zipcode").fill("3174");
  await page.locator("#mobile_number").fill("0433552112");
  //13. click on create account
  await page.click("button[data-qa='create-account']");

    //15. Click on continue
    await page.click(".btn.btn-primary");


    await page.click('a[href="/logout"]');


  await page.click('a[href="/login"]');


  await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
  
  await page.locator("input[data-qa='login-email']").fill("tonyman1@getnada.com");
  await page.locator("input[placeholder='Password']").fill("Fartboy1983!");

  await page.click("button[data-qa='login-button']");

    //17. verify that Account name text is visible
    await expect(page.locator("ul[class='nav navbar-nav'] li a b")).toBeVisible();
  
    //16. Delete Account
    await page.click("a[href='/delete_account']");

    //17. verify that Account Delete text is visible
    await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible();

    //18. Click on continue
    await page.click(".btn.btn-primary");

}

);