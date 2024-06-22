// Define the AutomationExCustomerCreationPage class
class AutomationExCustomerCreationPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
        // Define locators for the login button, user email input, and user password input
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }

    // Method to verify that the customer creation page is loaded successfully
    async verifyCustomerCreationPage(expect) {
        // Verify that the "ACCOUNT CREATED!" text is visible on the page
        await expect(this.page.locator('text=ACCOUNT CREATED!')).toBeVisible();
        // Click the continue button on the customer creation page
        await this.page.click(".btn.btn-primary");
    }

    // Method to click the continue button on the customer creation page
    async clickcontinuebutton() {
        // Click the continue button
        await this.page.click(".btn.btn-primary");
    }
}

// Export the AutomationExCustomerCreationPage class for use in other files
module.exports = { AutomationExCustomerCreationPage };