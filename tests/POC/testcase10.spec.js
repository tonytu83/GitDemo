const {test, expect} = require('@playwright/test');

test('Testcase 10', async ({page})=>
{
 //1. Launch browser
    
    //2. Navigate to url 'http://automationexcercise.com'
    await page.goto("https://automationexercise.com");
    
    //3. Verify that home page is visible successfully
    await expect(page).toHaveURL("https://automationexercise.com");
    await expect(page.locator('body')).toBeVisible();
    
    //4. scroll down to footer
    await page.evaluate(() => {
        const body =
    document.querySelector('body');
        if(body){
            window.scrollTo(0,body.scrollHeight);
        }
    });
 


    //5. Enter email address input and click arrow button
    await page.locator("#susbscribe_email").fill("tonyman1@getnada.com");


    //6. clcick subscribe
    await page.click('.fa.fa-arrow-circle-o-right');

    //7. verify success message 
    const successMessage =  page.locator('text=You have been successfully subscribed!');
    await expect(successMessage).toBeVisible();

}

);