Feature: Ecommerce valiadtions

    Scenario: Scenario namecenario: Placing the order
    Given a login to Ecommerce application with "tonyman1@getnada.com" and "Dickman01!"
    When Add "ZARA COAT 3" to cart
    Then Verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and Place the order
    Then Verify order in present in the OrderHistory
