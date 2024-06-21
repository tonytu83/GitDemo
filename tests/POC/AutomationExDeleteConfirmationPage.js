class AutomationExDeletePage {

    constructor(page)
    {
        this.page = page;
        this.continuebutton = page.locator(".btn.btn-primary");
       

    }

    async verifyDeleteConfirmationPage(expect)
    {

        await expect(this.page.locator('text=ACCOUNT DELETED!')).toBeVisible();

    }

    async continueButton()
    {
        await this.continuebutton.click();
       
    }
}
module.exports = {AutomationExDeletePage};