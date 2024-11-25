# CodeceptJS-Playwright-Browserstack

# Integrating Playwright <a href="https://playwright.dev/docs/intro"><img src="https://playwright.dev/img/playwright-logo.svg" alt="Node.js" height="22" /></a>  and CodeceptJS <a href="https://codecept.io/"><img src="https://codecept.io/logo.svg" alt="Node.js" height="22" /></a> with BrowserStack <a href="https://browserstack.com"><img src="https://raw.githubusercontent.com/browserstack/MSTest-playwright-browserstack/main/assets/browserstack.png" alt="BrowserStack" height="22" /></a>


## Setup
*  Clone the repo `git clone https://github.com/browserstack/codecept-js-playwright-browserstack.git`.
*  Run `cd codecept-js-playwright-browserstack`.
*  Install dependencies `npm install`


## Running your tests

- To run the sample tests in parallel across the platforms specified in the `browserstack.yml`, run `npm run sample-test`.
- To run the sample local tests in parallel across the platforms specified in the `browserstack.yml`, run `npm run sample-local-test`.

## Notes
* You can export the environment variables for the Username and Access Key of your BrowserStack account. 

  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
* Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Addtional Resources
* [Documentation for writing Automate test scripts in CodeceptJS](https://codecept.io/helpers/WebDriver/#webdriver)
* [Documentation for playwright](https://playwright.dev/docs/intro)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)


