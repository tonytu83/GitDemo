// Define the AutomationExLoginPage class
class AutomationExLoginPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
        // Define locators for the new username, existing username, password, and first name input fields
        this.newusername = page.locator("input[data-qa='signup-email']");
        this.existingusername = page.locator("input[data-qa='login-email']");
        this.password = page.locator("input[placeholder='Password']");
        this.fname = page.locator("input[placeholder='Name']");
    }

    // Method to verify that the login page is loaded successfully
    async verifyLoginPage(expect) {
        // Verify that the body element of the page is visible
        await expect(this.page.locator('body')).toBeVisible();
        // Log the title of the page to the console
        console.log(await this.page.title());
        // Verify that the title of the page matches the expected title
        await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login");
    }

    // Method to fill in the sign-up form with first name and new username
    async fillLoginDetails(fname, username) {
        await this.fname.fill(fname); // Fill in the first name
        await this.newusername.fill(username); // Fill in the new username (email)
    }

    // Method to click the sign-up button
    async clickOnSignup() {
        await this.page.click("button[data-qa='signup-button']"); // Click the sign-up button
    }

    // Method to fill in the existing login form with username and password
    async fillExistingLoginDetails(username, password) {
        await this.existingusername.fill(username); // Fill in the existing username (email)
        await this.password.fill(password); // Fill in the password
    }

    // Method to click the login button
    async clickOnLogin() {
        await this.page.click("button[data-qa='login-button']"); // Click the login button
    }
}

// Export the AutomationExLoginPage class for use in other files
module.exports = { AutomationExLoginPage };