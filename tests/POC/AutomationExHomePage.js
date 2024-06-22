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

    async clickOnProductsPage()
    {
    await this.page.click('a[href="/products"]');

    }

    async verifyUser(expect)
    {
    
        await expect(this.page.locator("ul[class='nav navbar-nav'] li a b")).toBeVisible();

    }

    async clickOnCart()
    {
    
        await this.page.click('header[id="header"] li:nth-child(3) a:nth-child(1)');

    }

     
   
}
module.exports = {AutomationExHomePage};