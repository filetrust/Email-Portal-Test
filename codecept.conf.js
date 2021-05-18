exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'process.env.URL' || 'https://qa1.curlywurly.me',
      email: 'process.env.QA_EMAIL',
      password: 'process.env.QA_PASSWORD',
      show: true,
      windowSize: '1536 x 826',
     chrome: {
       args: ['--no-sandbox', '--window-size=1536,826'],
     },
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForAction: 2000,
      waitForTimeout: 60000
    },
    Mochawesome: {
      uniqueScreenshotNames: "true"
    },
    "AssertWrapper" : {
      "require": "codeceptjs-assert"
    }
  },
  include: {
    I: './specs/step_definitions/steps_file.js',
    env: './credentials.js',
    data: './src/data/user-data.js',
    homePage: './src/pages/home.page.js',
    loginPage: './src/pages/login.page.js',
    userActivationPage: './src/pages/account-activation.page.js',
    passwordResetPage: './src/pages/password-reset.page.js',
    policyPage: './src/pages/policy.page.js',
    policySgPage: './src/pages/sender-groups.page.js',
    policyRgPage: './src/pages/receiver-groups.page.js',
    policyPrPage: './src/pages/processing-rules.page.js',
    policyCmpPage: './src/pages/cmp.page.js',
    transactionsPage: './src/pages/transactions.page.js',
    usersPage: './src/pages/users.page.js',
    userGroupsPage: './src/pages/groups.page.js',
    rolesPage: './src/pages/roles.page.js',
    relayEndpointsPage: './src/pages/relay-endpoints.page.js',
    allowedDomainsPage: './src/pages/allowed-domains.page.js',
    systemSettingsPage: './src/pages/system-settings.page.js',
    fileReleaseRPage: './src/pages/file-release-request.page.js'
  },
  mocha: {
    reporterOptions: {
      "reportDir": "output"
    },
    "mochawesome": {
      "stdout": "./output/console.log",
      "options": {
        "reportDir": "./output",
        "reportname": "report"
      }
  }
},
  bootstrap: null,
  teardown: null,
  hooks: [

   ],
  gherkin: {
    features: './specs/features/*.feature',
    steps: './specs/step_definitions/*.steps.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      //outputDir: 'output'
    },
    stepByStepReport: {
      enabled: false,
      deleteSuccessful: false,
      screenshotsForAllureReport: false
    },

    // reportportal: {
    //   enabled: true,
    //   require: '@reportportal/agent-js-codecept',
    //   token: '59efa91b-e0fe-4ce8-b075-922f227ba5e2',
    //   endpoint: 'https://web.demo.reportportal.io/api/v1',
    //   launchName: 'testlaunch',
    //   projectName: 'nadhodegw_personal'
    // }
  },
  tests: './specs/tests/*_test.js',
  name: 'email-portal-test'
}