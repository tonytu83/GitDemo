class AutomationExLoginPage {

    constructor(page)
    {
        this.page = page;
        this.fname = page.locator("input[placeholder='Name']");
        this.username = page.locator("input[data-qa='signup-email']");


     

    }

       async verifyLoginPage(expect)
    {
    
        await expect(this.page.locator('body')).toBeVisible();
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login");
      

    }

    async fillLoginDetails(fname,username)
    {
      

        await this.fname.fill(fname);
        await this.username.fill(username);


    }

    async clickOnSignup()
    {
        await this.page.click("button[data-qa='signup-button']");
       
    }


   
}
module.exports = {AutomationExLoginPage};