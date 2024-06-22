// Define the AutomationExSignupPage class
class AutomationExSignupPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
        
        // Define locators for various input fields and elements on the sign-up page
        this.genderLocator = page.locator("#id_gender1");
        this.passwordLocator = page.locator("#password");
        this.dropdownDay = page.locator("#days");
        this.dropdownMonth = page.locator("#months");
        this.dropdownYear = page.locator("#years");
        this.newslettercheck = page.locator("#newsletter");
        this.optincheck = page.locator("#optin");
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

    // Method to verify that the sign-up page is loaded successfully
    async verifyautomationExSignupPage(expect) {
        // Log the title of the page to the console
        console.log(await this.page.title());
        // Verify that the title of the page matches the expected title
        await expect(this.page).toHaveTitle("Automation Exercise - Signup");
    }

    // Method to fill in customer details in the sign-up form
    async fillCustomerDetails(gender, password, day, month, year, fname, lname, company, address, country, state, suburb, postcode, phone) {
        // Fill in the gender, password, and date of birth fields
        await this.genderLocator.check(gender);
        await this.passwordLocator.fill(password);
        await this.dropdownDay.selectOption(day);
        await this.dropdownMonth.selectOption(month);
        await this.dropdownYear.selectOption(year);
        
        // Check the newsletter and special offers checkboxes
        await this.newslettercheck.click();
        await this.optincheck.click();
        
        // Fill in the remaining customer details
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

    // Method to click the sign-up button
    async clickOnSignup() {
        await this.page.click("button[data-qa='create-account']"); // Click the sign-up button
    }
}

// Export the AutomationExSignupPage class for use in other files
module.exports = { AutomationExSignupPage };