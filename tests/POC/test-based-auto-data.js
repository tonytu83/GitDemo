const base = require('@playwright/test');

exports.customtest2 = base.test.extend(
    {
        testDataForCustomerCreation: {
            fname: "Tony",
            lname: "Poo",
            gender: "Mr",
            username: "tonyman69@getnada.com",
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
        testDataForCreditCard: {
            nameoncard: "Tony Tu", 
            cardnumber: "4111111111111111",
            cvc: "862",
            expirymonth: "6",
            expiryyear: "2027"

            
        }

    }
)