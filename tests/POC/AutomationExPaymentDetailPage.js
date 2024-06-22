// Define the AutomationExPaymentDetailPage class
class AutomationExPaymentDetailPage {

    // Constructor to initialize the class with the Playwright page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use

        // Define locators for various input fields on the payment detail page
        this.nameLocator = page.locator("input[name='name_on_card']");
        this.cardnumberLocator = page.locator("input[name='card_number']");
        this.cvcLocator = page.locator("input[placeholder='ex. 311']");
        this.expirymonthLocator = page.locator("input[placeholder='MM']");
        this.expiryyearLocator = page.locator("input[placeholder='YYYY']");
    }

    // Method to fill in credit card details on the payment detail page
    async fillCreditCardDetails(nameoncard, cardnumber, cvc, expirymonth, expiryyear) {
        // Fill the name on the card input field
        await this.nameLocator.fill(nameoncard);
        // Fill the card number input field
        await this.cardnumberLocator.fill(cardnumber);
        // Fill the CVC input field
        await this.cvcLocator.fill(cvc);
        // Fill the expiry month input field
        await this.expirymonthLocator.fill(expirymonth);
        // Fill the expiry year input field
        await this.expiryyearLocator.fill(expiryyear);
    }

    // Method to submit the payment for the order
    async submitpaymentforOrder() {
        // Click the submit button to process the payment
        await this.page.click('#submit');
    }

    // Method to verify that the payment detail page is loaded successfully
    async verifyPaymentPage(expect) {
        // Verify that the body element of the page is visible
        await expect(this.page.locator('body')).toBeVisible();
    }
}

// Export the AutomationExPaymentDetailPage class for use in other files
module.exports = { AutomationExPaymentDetailPage };