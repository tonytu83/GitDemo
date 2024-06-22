// Define the AutomationExProductsPage class
class AutomationExProductsPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use
    }

    // Method to verify that the products page is loaded successfully
    async verifyProductPage(expect) {
        // Verify that the body element of the page is visible
        await expect(this.page.locator('body')).toBeVisible();
    }

    // Method to select the first product on the products page and add it to the cart
    async selectFirstProduct() {
        // Locate the first product with the "Add to cart" button
        const firstProduct = this.page.locator('.productinfo.text-center:has-text("Add to cart")').first();
        // Hover over the first product
        await firstProduct.hover();
        // Click the "Add to cart" button
        await firstProduct.locator('text=Add to cart').click();
        // Click the "Continue Shopping" button
        await this.page.click('text=Continue Shopping');
    }

    // Method to select the second product on the products page and add it to the cart
    async selectSecondProduct() {
        // Locate the second product with the "Add to cart" button
        const secondProduct = this.page.locator('.productinfo.text-center:has-text("Add to cart")').nth(1);
        // Hover over the second product
        await secondProduct.hover();
        // Click the "Add to cart" button
        await secondProduct.locator('text=Add to cart').click();
        // Click the "Continue Shopping" button
        await this.page.click('text=Continue Shopping');
    }

    // Method to click the cart button in the header to navigate to the cart page
    async clickCartButton() {
        await this.page.click('header[id="header"] li:nth-child(3) a:nth-child(1)'); // Click the cart button
    }

    // Method to click the continue button (currently commented out)
    async continueButton() {
        // Implementation for continue button can be added here
    }
}

// Export the AutomationExProductsPage class for use in other files
module.exports = { AutomationExProductsPage };