// Importing the necessary page objects required for the test
const {TelstraLoggedInHomePage} = require('./TelstraLoggedInHomePage');



// Define the Page Object Manager class
class POManager3
{
    // Constructor to initialize the page object manager with the Playwright page instance

constructor(page)
{
    // Store the page instance
    this.page = page;
    this.telstraLoggedInHomePage = new TelstraLoggedInHomePage(this.page);
  
}



 // Getter method to return the Payment Page object
getLoggedInMyTelstraHomePage()
{
    return this.telstraLoggedInHomePage;
}



// Export the POManager2 class for use in other files

}
module.exports = {POManager3};