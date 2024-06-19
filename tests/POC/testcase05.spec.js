const {test, expect} = require('@playwright/test');

test('Testcase 05', async ({page})=>
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


   //8. //Verify error 'Email Address already exist' is visible
   const errorMessage = await page.waitForSelector('p:has-text("Email Address already exist!")');
                    

    if (errorMessage)
    {
        console.log('Email Address already ecists error is visible');

    }
    else
    {
        console.log('Error message not found');
    }
    
}

);