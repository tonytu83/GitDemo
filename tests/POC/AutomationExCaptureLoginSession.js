// Define the AutomationCaptureLoginSession class
class AutomationCaptureLoginSession {

    // Constructor to initialize the class with the Playwright page instance
    constructor(browser) {
        this.browser = browser; // Store the page instance for later use
        // Define locators for the new username, existing username, password, and first name input fields
        this.existingusername2 = browser.locator("input[data-qa='login-email']");
        this.password2 = browser.locator("input[placeholder='Password']");
       
    }
    

    // Method to verify that the login page is loaded successfully
    async verifyLoginPage(expect) {
        // Verify that the body element of the page is visible
        await expect(this.browser.locator('body')).toBeVisible();
        // Log the title of the page to the console
        console.log(await this.browser.title());
        // Verify that the title of the page matches the expected title
        await expect(this.browser).toHaveTitle("Automation Exercise - Signup / Login");
    }

    // Method to click the sign-up button
    async clickOnSignup() {
        await this.page.click("button[data-qa='signup-button']"); // Click the sign-up button
    }

    // Method to fill in the existing login form with username and password
    async fillExistingLoginDetails(username, password) {
        await this.existingusername2.fill(username); // Fill in the existing username (email)
        await this.password2.fill(password); // Fill in the password
    }

    // Method to click the login button
    async clickOnLogin() {
        await this.browser.click("button[data-qa='login-button']"); // Click the login button
    }
}

// Export the AutomationCaptureLoginSession class for use in other files
module.exports = { AutomationCaptureLoginSession };