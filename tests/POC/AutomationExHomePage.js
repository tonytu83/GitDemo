// Define the AutomationExHomePage class
class AutomationExHomePage {
// Constructor to initialize the class with the Playwright page instance
    constructor(page)
    {
        this.page = page; // Store the page instance for later use
    }
    // Method to navigate to the home page URL
    async goTo()
    {
       // Use the page instance to navigate to the specified URL
       await this.page.goto("https://automationexercise.com");
    }
    // Method to verify that the home page is loaded successfully
    async verifyHomePage(expect)
    {
        // Verify that the URL of the current page matches the expected URL
        await expect(this.page).toHaveURL("https://automationexercise.com");
        // Verify that the body element of the page is visible
        await expect(this.page.locator('body')).toBeVisible();
    }
    // Method to click on the 'Login' link
    async clickOnLogin()
    {
        // Click on the 'Login' link using its href attribute
        await this.page.click('a[href="/login"]');
    }
    // Method to click on the 'Delete Account' link
    async clickOnDelete()
    {
        // Click on the 'Delete Account' link using its href attribute
        await this.page.click('a[href="/delete_account"]');
       
    }
    // Method to click on the 'Logout' link
    async clickOnLogout()
    {
         // Click on the 'Logout' link using its href attribute
        await this.page.click('a[href="/logout"]');
       
    }
     // Method to click on the 'Products' page link
    async clickOnProductsPage()
    {
        // Click on the 'Products' page link using its href attribute
        await this.page.click('a[href="/products"]');

    }
    // Method to verify that the user is logged in
    async verifyUser(expect)
    {
        // Verify that the user's name is visible in the navigation bar
        await expect(this.page.locator("ul[class='nav navbar-nav'] li a b")).toBeVisible();

    }
    // Method to click on the 'Cart' link
    async clickOnCart()
    {
        // Click on the 'Cart' link using its position in the header
        await this.page.click('header[id="header"] li:nth-child(3) a:nth-child(1)');

    }   
}
// Export the AutomationExHomePage class for use in other files
module.exports = {AutomationExHomePage};