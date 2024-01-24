const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  viewportHeight: 720,
  viewportWidth: 1280,
  chromeWebSecurity: false,
  defaultCommandTimeout: 2000,
  
});
