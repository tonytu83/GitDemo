// Define the AutomationExDeletePage class
class AutomationExDeletePage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
        // Define locator for the continue button on the deletion confirmation page
        this.continuebutton = page.locator(".btn.btn-primary");
    }

    // Method to verify that the account deletion confirmation page is loaded successfully
    async verifyDeleteConfirmationPage(expect) {
        // Verify that the "ACCOUNT DELETED!" text is visible on the page
        await expect(this.page.locator('text=ACCOUNT DELETED!')).toBeVisible();
    }

    // Method to click the continue button on the deletion confirmation page
    async continueButton() {
        // Click the continue button
        await this.continuebutton.click();
    }
}

// Export the AutomationExDeletePage class for use in other files
module.exports = { AutomationExDeletePage };