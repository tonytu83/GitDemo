const {test, expect} = require('@playwright/test');

test('Testcase 06', async ({page})=>
{
//1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();

    // click on contact us button
    await page.click("a[href='/contact_us']");


    await page.waitForTimeout(5000);
    console.log('Waited for 5 seconds');  
    // verify 'GET IN TOUCH' is visible
    await expect(page.locator('text=GET IN TOUCH')).toBeVisible();


    await page.waitForTimeout(5000);
    console.log('Waited for 5 seconds');  
    // Enter Name, email, subject
      //6. Enter name and email address
      await page.locator("input[placeholder='Name']").fill("Tony");
      await page.locator("input[placeholder='Email']").fill("tonyman1@getnada.com"); 
      await page.locator("input[placeholder='Subject']").fill("FartMan"); 
      await page.locator("#message").fill("Test it here"); 

    //Upload file

    await page.waitForTimeout(5000);
    console.log('Waited for 5 seconds');  
    

    await page.locator('input[name="upload_file"]')
    .setInputFiles('C:/Users/552560/OneDrive - Cognizant/Documents/PlayWrightAutomation/tests/POC/test.txt');

    await page.waitForTimeout(5000);
    console.log('Waited for 5 seconds');  

    console.log('Uploaded file');

 


  //click ok button on the alert
  page.on('dialog',async dialog => { 
    console.log(dialog.message());
    await dialog.accept();



  });

    
    await page.click("input[value='Submit']");

    // await page.getByRole('button', { name: 'Submit' }).click();

  


    await page.locator('#contact-page').getByText('Success! Your details have').click();

  // verify 'Success! Your details have been submitted successfully.' is visible
  await expect(page.locator('.status.alert.alert-success')).toBeVisible();


  // click on Home button
  await page.click('a[class="btn btn-success"] span');

  

  await page.frameLocator('iframe[name="aswift_1"]').getByLabel('Close ad').click();




 // Verify that home page is visible successfully
 await expect(page).toHaveURL("https://automationexercise.com");
 await expect(page.locator('body')).toBeVisible();

   


 
}

);