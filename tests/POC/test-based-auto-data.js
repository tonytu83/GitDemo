// Importing the base test functionalities from Playwright
const base = require('@playwright/test');

exports.customtest2 = base.test.extend(
    { // Exporting a custom test configuration by extending the base test
        testDataForCustomerCreation: {   // Defining test data for customer creation
            fname: "Tony",
            lname: "Poo",
            gender: "Mr",
            username: "tonyman105@getnada.com",
            password: "Fartboy1983!",
            day: "30",
            month: "December",
            year: "1983",
            company: "Cognizant",
            address: "73 Leonard Avenue",
            country: "Australia",
            state: "VIC",
            suburb: "Noble Park",
            postcode: "3174",
            phone: "0433552111"
            
        },
        testDataForCreditCard: { // Defining test data for credit card
            nameoncard: "Tony Tu", 
            cardnumber: "4111111111111111",
            cvc: "862",
            expirymonth: "6",
            expiryyear: "2027"

            
        }

    }
)