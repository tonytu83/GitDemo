class AutomationExProductsPage {

    constructor(page)
    {
        this.page = page;
      
    }

    async verifyProductPage(expect)
    {
    
        await expect(this.page.locator('body')).toBeVisible();
    }

    async selectFirstProduct()
    {
    
   


        const firstProduct = this.page.locator('.productinfo.text-center:has-text("Add to cart")').first();
        await firstProduct.hover();
        await firstProduct.locator('text=Add to cart').click();
       await this.page.click('text=Continue Shopping');
       
    }


    async selectSecondProduct()
    {
    
        const secondProduct = this.page.locator('.productinfo.text-center:has-text("Add to cart")').nth(1);
        await secondProduct.hover();
        await secondProduct.locator('text=Add to cart').click();
        await this.page.click('text=Continue Shopping');
       
    }

    async clickCartButton()
    {
        await this.page.click('header[id="header"] li:nth-child(3) a:nth-child(1)');
       
    }

    async continueButton()
    {
      //  await this.continuebutton.click();
       
    }
}
module.exports = {AutomationExProductsPage};