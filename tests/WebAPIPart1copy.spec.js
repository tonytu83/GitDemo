const {test, expect, request} = require('@playwright/test');
const loginPayload = {userEmail:"tonyman1@getnada.com",userPassword:"Dickman01!"};
const orderPayLoad = {orders: [{country: "Cuba", productOrderedId: "6581ca399fd99c85e8ee7f45"}]};
let token;
let orderId;
test.beforeAll( async()=>
{
    // login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginPayload
    }) //200,201,2
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);
   
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data : orderPayLoad, 
        headers: {
                    'Authorization' :token,
                    'Content-Type'  : 'application/json'
                },
                            
    })
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0]; 
});

test.beforeEach(()=>
{


})

test('Place the order', async ({page})=>
{
    page.addInitScript(value => {

        window.localStorage.setItem('token', value);

    }, token);
await page.goto("https://rahulshettyacademy.com/client/");
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");

for(let i =0; i<await rows.count(); ++i)
{
    const rowOrderId =await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId))
    {
        await rows.nth(i).locator("button").first().click();
        break;

        
    }
}

const orderIdDetails =await page.locator(".col-text").textContent();
await page.pause();
expect(orderId.includes(orderIdDetails)).toBeTruthy();

});

//verify if the order created is showing in the history page
// pre-condition - create order

