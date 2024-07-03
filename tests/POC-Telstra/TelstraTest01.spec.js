// Importing necessary modules from Playwright
const { test, expect } = require('@playwright/test');
// Importing custom test data and page objects
const { customtest3 } = require('./test-based-auto-data3');
const { POManager3 } = require('./POManager3');




async function
  waitForSelectorWithRetry(page, selector, retries = 5, backoff = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      await
        page.waitForSelector(selector, { state: 'visible' });
      return;
    } catch (e) {
      if (i < retries - 1) {
        console.log(`Retrying... Attempt ${i + 1}`);

        await page.waitForTimeout(backoff);
        backoff *= 2; // Exponential backoff 
      } else { throw e; }
    }
  }
}









let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.myservices.telstra.com.au/home");
  await page.locator("#username").fill("tony.tu83@gmail.com");


  // Introduce a delay before clicking the submit button 

  await page.waitForTimeout(10000); // 1000 milliseconds = 1 second 
  await page.locator('#submit_btn').click();

  await waitForSelectorWithRetry(page, '#password');
  await page.locator('#password').fill('Fartboy1983!');

  await page.waitForTimeout(1000); await page.locator('#submit_btn').click();
  await waitForSelectorWithRetry(page, '#netwrk');
  await page.locator('#netwrk').click();

  await page.locator('#TrustBtn').click();
  await page.locator('#laterBtn').click();
  await context.storageState({ path: 'state.json' });
  webContext = await browser.newContext({ storageState: 'state.json' });
});






// Define a custom test with a descriptive name
customtest3('Place Order: Register while Checkout', async () => {
  // 1. Launch browser and navigate to the URL

});