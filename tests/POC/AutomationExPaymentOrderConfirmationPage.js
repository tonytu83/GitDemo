class AutomationExPaymentOrderConfirmationPage {

    constructor(page)
    {
        this.page = page;
        this.continuebutton = page.locator(".btn.btn-primary");
       

    }

    async verifyOrderPage(expect)
    {

        await expect(this.page.locator('text=Congratulations! Your order has been confirmed!')).toBeVisible();

    }

    async continueButton()
    {
        await this.continuebutton.click();
       
    }
}
module.exports = {AutomationExPaymentOrderConfirmationPage};