// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// Read more here:
// https://on.cypress.io/configuration

/// <reference types='Cypress' />

// Ignore uncaught exceptions related to cross-origin errors
Cypress.on('uncaught:exception', (err) => {
  // Check if the error message indicates a cross-origin issue
  if (err.message.includes('Permission denied') || err.message.includes('SecurityError')) {
    // Log the error message (optional)
    cy.log('Caught a cross-origin error:', err.message);
    // Return false to prevent Cypress from failing the test
    return false;
  }
  // If the error is not related to cross-origin issues, let Cypress handle it
  return true;
});