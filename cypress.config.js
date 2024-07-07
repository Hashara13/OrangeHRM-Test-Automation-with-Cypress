const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      on('task', { downloadFile });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
