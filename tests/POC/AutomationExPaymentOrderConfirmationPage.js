// Define the AutomationExPaymentOrderConfirmationPage class
class AutomationExPaymentOrderConfirmationPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
        // Define locator for the continue button on the order confirmation page
        this.continuebutton = page.locator(".btn.btn-primary");
    }

    // Method to verify that the order confirmation page is loaded successfully
    async verifyOrderPage(expect) {
        // Verify that the order confirmation message is visible on the page
        await expect(this.page.locator('text=Congratulations! Your order has been confirmed!')).toBeVisible();
    }

    // Method to click the continue button on the order confirmation page
    async continueButton() {
        // Click the continue button
        await this.continuebutton.click();
    }
}

// Export the AutomationExPaymentOrderConfirmationPage class for use in other files
module.exports = { AutomationExPaymentOrderConfirmationPage };