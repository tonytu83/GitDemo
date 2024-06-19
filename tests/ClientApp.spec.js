const {test, expect} = require('@playwright/test');

test('Browser Context validating error login ', async ({page})=>
{
    const productname = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    const email = "tonyman1@getnada.com"
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Dickman01!");
    await page.locator("[value='Login']").click();

    //await page.waitForLoadState('networkidle');

    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    const count = await products.count();

    for(let i =0; i < count; ++i)
    {
    if(await products.nth(i).locator("b").textContent() == productname) 
    {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
    }

await page.locator("[routerlink*='cart']").click();
page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
expect(bool).toBeTruthy();   
await page.locator("text=checkout").click();
await page.locator("[placeholder*='Country']").pressSequentially("Ind",{delay:100});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionCount = await dropdown.locator("button").count();
for(let i=0; i< optionCount; ++i)
{
    const text = await dropdown.locator("button").nth(i).textContent();
    if(text === " India")
    {
        await dropdown.locator("button").nth(i).click();
        break;
    }
}

expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);
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

const orderIdDetails = await page.locator(".col-text").textContent();
expect(orderId.includes(orderIdDetails)).toBeTruthy();

}

);


