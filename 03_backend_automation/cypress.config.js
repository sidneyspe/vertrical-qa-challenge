const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://jsonplaceholder.typicode.com',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
  },
  video: true,
  videosFolder: './cypress/results/videos',
  screenshotsFolder: './cypress/results/screenshots'
});
