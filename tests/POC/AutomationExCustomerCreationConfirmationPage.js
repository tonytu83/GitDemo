class AutomationExCustomerCreationPage {

    constructor(page)
    {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");

    }

    async verifyCustomerCreationPage(expect)
    {

        await expect(this.page.locator('text=ACCOUNT CREATED!')).toBeVisible();
        await this.page.click(".btn.btn-primary")
    }

    async clickcontinuebutton()
    {
        await this.page.click(".btn.btn-primary");
       
    }

}
module.exports = {AutomationExCustomerCreationPage};