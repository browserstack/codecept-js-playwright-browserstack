const browserstack = require("browserstack-local");
const util = require('util');
require('dotenv').config()

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY

exports.config = {
    tests: './*_test.js',
    output: './output',
    timeout: 120,
    helpers: {
        Playwright: {
          url: 'http://bs-local.com:45454/',
          show: true,
          restart: 'keep',
        }
      },
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    name: 'CodeceptJS-Playwright-BrowserStack-Local',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
}
