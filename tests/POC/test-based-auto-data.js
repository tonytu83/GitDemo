const base = require('@playwright/test');

exports.customtest2 = base.test.extend(
    {
        testDataForCustomerCreation: {
            fname: "Tony",
            lname: "Poo",
            username: "tonyman51@getnada.com",
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
            
        }
    }
)