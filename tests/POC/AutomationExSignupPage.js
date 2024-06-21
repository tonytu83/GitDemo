class AutomationExSignupPage {

    constructor(page)
    {
        this.page = page;
        this.genderLocator = page.locator("#id_gender1");
        this.passwordLocator = page.locator("#password");
        this.dropdownDay = page.locator("#days")
        this.dropdownMonth = page.locator("#months")
        this.dropdownYear = page.locator("#years")
        this.fnameLocator = page.locator("#first_name");
        this.lnameLocator = page.locator("#last_name");
        this.companyLocator = page.locator("#company");
        this.addressLocator = page.locator("#address1");
        this.countryLocator = page.locator("#country");
        this.stateLocator = page.locator("#state");
        this.suburbLocator = page.locator("#city");
        this.postcodeLocator = page.locator("#zipcode");
        this.phoneLocator = page.locator("#mobile_number");

    }

    async verifyautomationExSignupPage(expect)
    {
    
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle("Automation Exercise - Signup");
      

    } 

    async fillCustomerDetails(gender,password,day,month,year,fname,lname,company,address,country,state,suburb,postcode,phone)
    {
           
        await this.genderLocator.check(gender);
        await this.passwordLocator.fill(password);
        await this.dropdownDay.selectOption(day);
        await this.dropdownMonth.selectOption(month);
        await this.dropdownYear.selectOption(year);    
   
        //10. checkbox newsletter
        await this.page.locator("#newsletter").click();
        //11. checkbox special offers
        await this.page.locator("#optin").click();
        //12. fill in address details

        await this.fnameLocator.fill(fname);  
        await this.lnameLocator.fill(lname);  
        await this.companyLocator.fill(company);  
        await this.addressLocator.fill(address);  

        await this.countryLocator.selectOption(country);
        await this.stateLocator.fill(state);  
        await this.suburbLocator.fill(suburb);  
        await this.postcodeLocator.fill(postcode);  
        await this.phoneLocator.fill(phone);  
     
  
       
    }


    async clickOnSignup()
    {
        await this.page.click("button[data-qa='create-account']");
       
    }
    





   
}
module.exports = {AutomationExSignupPage};