const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('../utils/APiUtils');
const loginPayload = {userEmail:"tonyman1@getnada.com",userPassword:"Dickman01!"};
const orderPayLoad = {orders: [{country: "Cuba", productOrderedId: "6581ca399fd99c85e8ee7f45"}]};
const fakePayLoadOrders = {data:[],message:"No Orders"};

let response;
test.beforeAll( async()=>
{

    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginPayload);
    response = await apiUtils.createOrder(orderPayLoad);
});

test('Place the order', async ({page})=>
{
   
    page.addInitScript(value => {

        window.localStorage.setItem('token', value);


    }, response.token);

await page.goto("https://rahulshettyacademy.com/client/");

await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
async route=>
{
   const response = await page.request.fetch(route.request());
  let body = JSON.stringify(fakePayLoadOrders);
   route.fulfill(
    {
        response,
        body,
    });

    
    //intercepting response - api response > {playwright fake response}} >> browser render data on front end
});





await page.locator("button[routerlink*='myorders']").click();
//await page.pause();
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
console.log(await page.locator(".mt-4").textContent());


//await page.locator("tbody").waitFor();
//const rows = await page.locator("tbody tr");

}
);
