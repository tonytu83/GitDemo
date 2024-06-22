class AutomationExLoginPage {

    constructor(page)
    {
        this.page = page;
        this.newusername = page.locator("input[data-qa='signup-email']");
        this.existingusername = page.locator("input[data-qa='login-email']");

        this.password = page.locator("input[placeholder='Password']");
        this.fname = page.locator("input[placeholder='Name']");
     

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
        await this.newusername.fill(username);


    }

    async clickOnSignup()
    {
        await this.page.click("button[data-qa='signup-button']");
       
    }


    async fillExistingLoginDetails(username,password)
    {
      

        await this.existingusername.fill(username);
        await this.password.fill(password);
      


    }

    async clickOnLogin()
    {
        await this.page.click("button[data-qa='login-button']");
       
    }
   
}
module.exports = {AutomationExLoginPage};