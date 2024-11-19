// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.spec.js',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://localhost:3000', // Cambia esto a la URL de tu aplicación
  },
});