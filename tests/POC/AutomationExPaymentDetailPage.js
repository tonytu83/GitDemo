class AutomationExPaymentDetailPage {

    constructor(page)
    {
        this.page = page;
        this.nameLocator = page.locator("input[name='name_on_card']");
        this.cardnumberLocator = page.locator("input[name='card_number']");
        this.cvcLocator = page.locator("input[placeholder='ex. 311']");
        this.expirymonthLocator = page.locator("input[placeholder='MM']");
        this.expiryyearLocator = page.locator("input[placeholder='YYYY']");
    }

    async fillCreditCardDetails(nameoncard,cardnumber,cvc,expirymonth,expiryyear)
    {
    
        await this.nameLocator.fill(nameoncard);
        await this.cardnumberLocator.fill(cardnumber);
        await this.cvcLocator.fill(cvc);
        await this.expirymonthLocator.fill(expirymonth);
        await this.expiryyearLocator.fill(expiryyear);

    }

    async submitpaymentforOrder()
    {
       
        await this.page.click('#submit');
    }



    async  verifyPaymentPage(expect)
    {
       
        await expect(this.page.locator('body')).toBeVisible();
    }

   

}
module.exports = {AutomationExPaymentDetailPage};