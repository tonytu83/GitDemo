// Define the AutomationExCartPage class
class AutomationExCartPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
    }

    // Method to verify that the cart page is loaded successfully
    async verifyCartPage(expect) {
        // Verify that the cart items element is visible
        await expect(this.page.locator('#cart_items')).toBeVisible();
    }

    // Method to click the checkout button on the cart page
    async clickcheckoutbutton() {
        // Click the checkout button using its class selector
        await this.page.click('.btn.btn-default.check_out');
    }

    // Method to click the register/login button on the cart page
    async registerloginbutton() {
        // Click the register/login button using its specific selector path
        await this.page.click('body > section:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)');
    }

    // Method to proceed to checkout from the cart page
    async proceedtocheckout() {
        // Click the checkout button using its class selector
        await this.page.click('.btn.btn-default.check_out');
    }
}

// Export the AutomationExCartPage class for use in other files
module.exports = { AutomationExCartPage };