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

    async clickOnDelete()
    {
        await this.page.click('a[href="/delete_account"]');
       
    }

    async clickOnLogout()
    {
        await this.page.click('a[href="/logout"]');
       
    }

    async verifyUser()
    {
        //17. verify that Account name text is visible
        await expect(this.page.locator("ul[class='nav navbar-nav'] li a b")).toBeVisible();

    }
     
   
}
module.exports = {AutomationExHomePage};