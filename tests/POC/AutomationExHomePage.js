class AutomationExHomePage {

    constructor(page)
    {
        this.page = page;


    }

    async goTo()
    {
       //await page.goto("https://automationexercise.com");
    
       await this.page.goto("https://automationexercise.com");
   
    

    }


    async verifyHomePage(expect)
    {
    
        
        await expect(this.page).toHaveURL("https://automationexercise.com");
        await expect(this.page.locator('body')).toBeVisible();
    }

    async clickOnLogin()
    {
        await this.page.click('a[href="/login"]');
       
    }



   
}
module.exports = {AutomationExHomePage};