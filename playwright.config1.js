// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
 // retries: 1,
  //workers: 1,


  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },


  reporter: 'html',
  projects: [
    {
      name: 'safari',
      use: {
  
        browserName : 'webkit',
        headless : true,
        screenshot: 'on',
        trace: 'on',  ////capture on failure
        ...devices['iPhone 11'],
      }
     
    },
    {
    name : 'chrome',
    use: {
  
      browserName : 'chromium',
      headless : false,
      screenshot: 'on',
      video: 'retain-on-failure',
      ignoreHttpsErrors:true,
      Permissions:['geolocation'],
      trace: 'on',  ////capture on failure
      //viewport : {width:720,height:720}
      }
    },
  
  ]

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

};

module.exports = config;