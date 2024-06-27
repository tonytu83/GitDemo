// Importing the base test functionalities from Playwright
const base = require('@playwright/test');

exports.customtest3 = base.test.extend(
    { // Exporting a custom test configuration by extending the base test
        
        testDataForExistingCustomer3: {   // Defining test data for customer creation
            username: "tonyman105@getnada.com",
            password: "Fartboy1983!"            
                    
        }

    }
)