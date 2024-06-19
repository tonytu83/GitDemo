const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForOrder: {
            username: "tonyman1@getnada.com",
            password: "Dickman01!",
            productName: "ZARA COAT 3"
        }
    }
)