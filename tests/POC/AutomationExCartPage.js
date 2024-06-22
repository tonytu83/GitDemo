class AutomationExCartPage {

    constructor(page)
    {
        this.page = page;


    }

       async verifyCartPage(expect)
    {
        await expect(this.page.locator('#cart_items')).toBeVisible();
    
    }

    async clickcheckoutbutton()
    {
        await this.page.click('.btn.btn-default.check_out');

    }
    async registerloginbutton()
    {
        await this.page.click('body > section:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)');


    }

    async proceedtocheckout()
    {
       
        await this.page.click('.btn.btn-default.check_out');
    }
   
}
module.exports = {AutomationExCartPage};