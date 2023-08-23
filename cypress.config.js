const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  fixturesFolder: false,
  chromeWebSecurity: false,
  reporterOptions: {
    code: true,
    charts: true,
    reportDir: "cypress/report/mochawesome-report",
    reportFilename: "[status]_[datetime]_[name]-report",
    // timestamp: "mmmm d, yyyy, h:MM TT",
    timestamp: "m/d/yyyy/hTT",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    env: {
      url: "http://localhost:3000/ticket-site",
      hideXhr: true
    },
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 15000,
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["cypress/e2e/**/*.{js,jsx,ts,tsx}"],
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
