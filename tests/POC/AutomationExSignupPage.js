class AutomationExSignupPage {

    constructor(page)
    {
        this.page = page;
        this.password = page.locator("#password");
        
    }

    async verifyautomationExSignupPage(expect)
    {
    
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle("Automation Exercise - Signup");
      

    } 

    async fillCustomerDetails(password)
    {
        await this.page.check('#id_gender1');
        const pwd = this.page.locator("#password");
        await this.pwd.fill(password);

      //  await this.page.locator("#password").fill(password);



        

        const dropdownDay = this.page.locator("#days");
        await dropdownDay.selectOption(testDataForCustomerCreation.day);
        const dropdownMonth = this.page.locator("#months");
        await dropdownMonth.selectOption(testDataForCustomerCreation.month);
        const dropdownYear = this.page.locator("#years");
        await dropdownYear.selectOption(testDataForCustomerCreation.year);
     
        //10. checkbox newsletter
        await this.page.locator("#newsletter").click();
        //11. checkbox special offers
        await this.page.locator("#optin").click();
        //12. fill in address details
        await this.page.locator("#first_name").fill(testDataForCustomerCreation.fname);
        await this.page.locator("#last_name").fill(testDataForCustomerCreation.lname);
        await this.page.locator("#company").fill(testDataForCustomerCreation.company);
        await this.page.locator("#address1").fill(testDataForCustomerCreation.address);
        const dropdownCountry = this.page.locator("#country");
        await dropdownCountry.selectOption(testDataForCustomerCreation.country);
        await this.page.locator("#state").fill(testDataForCustomerCreation.state);
        await this.page.locator("#city").fill(testDataForCustomerCreation.suburb);
        await this.page.locator("#zipcode").fill(testDataForCustomerCreation.postcode);
        await this.page.locator("#mobile_number").fill(testDataForCustomerCreation.phone);
       
    }


    async clickOnSignup()
    {
        await this.page.click("button[data-qa='create-account']");
       
    }
    





   
}
module.exports = {AutomationExSignupPage};