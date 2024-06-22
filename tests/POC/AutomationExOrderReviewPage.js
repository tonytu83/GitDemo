class AutomationExOrderReviewPage {

    constructor(page)
    {
        this.page = page;
        this.commentLocator = page.locator('textarea[name="message"]');
       // this.deliveryaddressLocator = page.locator('ul[id="address_delivery"] li[class="address_firstname address_lastname"]');
    }

    async verifyReviewPage(expect)
    {
    
        await expect(this.page.locator('ul[id="address_delivery"] li:nth-child(4)')).toHaveText('73 Leonard Avenue');

       
        //await expect(this.page.locator()).toHaveText(testDataForCustomerCreation.address);
       
      
    }

    async populateOrderMessage()
    {
       
        await this.commentLocator.fill('Please deliver between 9 AM and 5 PM.');
      
      
    }

    async continue()
    {
       
        await this.page.click('.btn.btn-default.check_out');
      
    }

}
module.exports = {AutomationExOrderReviewPage};