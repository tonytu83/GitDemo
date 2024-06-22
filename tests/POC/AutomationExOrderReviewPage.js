// Define the AutomationExOrderReviewPage class
class AutomationExOrderReviewPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
        // Define locator for the comment text area
        this.commentLocator = page.locator('textarea[name="message"]');
    }

    // Method to verify that the review page is loaded successfully and the delivery address is correct
    async verifyReviewPage(expect) {
        // Verify that the delivery address text matches the expected address
        await expect(this.page.locator('ul[id="address_delivery"] li:nth-child(4)')).toHaveText('73 Leonard Avenue');
    }

    // Method to fill in a comment in the order message text area
    async populateOrderMessage() {
        // Fill the comment text area with a message
        await this.commentLocator.fill('Please deliver between 9 AM and 5 PM.');
    }

    // Method to click the continue button to proceed to the next step in the checkout process
    async continue() {
        // Click the continue button
        await this.page.click('.btn.btn-default.check_out');
    }
}

// Export the AutomationExOrderReviewPage class for use in other files
module.exports = { AutomationExOrderReviewPage };