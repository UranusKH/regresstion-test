// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-plugin-xhr-toggle";
// or
require("cypress-plugin-xhr-toggle");

Cypress.Commands.add("getPrice", (itemIdentifier) => {
    cy.xpath(itemIdentifier).then(($priceElement) => {
    const priceTest = $priceElement  
    const price = parseFloat(priceTest.replace("$", ""));
    return price;
  });
});


// cy.getPrice("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[2]").then((price) => {
//     console.log(price);
//     cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[1]").invoke('text').then((text) => {
//     const quantity = parseInt(text)
//     console.log(quantity);
  
//   }).then(() => {

//   });

//   })


// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

//Stripe Payment
Cypress.Commands.add('getStripeElement', (selector, value) => {
  cy.get('iframe')
    .should((iframe) => expect(iframe.contents().find(selector)).to.exist)
    .then((iframe) => cy.wrap(iframe.contents().find(selector)))
    .within((input) => {
      cy.wrap(input).should('not.be.disabled').clear().type(value)
    })
})

// Adding a custom command to deal with iframe
Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
  // For more info on handling iframes in Cypress, visit:
  // https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
  
  // Assert that <iframe> is loaded
  cy.wrap($iframe).should(iframe => expect(iframe.contents().find('body')).to.exist);

  // Return <body> contents because it's a second "window"
  return cy.wrap($iframe.contents().find('body'));

})

// ------------------------------------------------------------------------------

Cypress.Commands.add("checkSFProductNames", () => {
  const products = [
    "amy aug 3 - demo guide tour",
    "amy aug 3 - schedule and creating regular test",
    "SF 어트랙션 2",
    "Amy SF City pass",
    "SF amy aug15 sim card ticket",
    "SF amy hard copy",
  ];
  return products;
});

Cypress.Commands.add("checkNYProductNames", () => {
  const products = [
    "Guide Tour",
    "NY Amy June 17 Big Apple Pass - regular ticket",
    "어트랙션 2 개",
    "NY City Pass",
    "amy aug 15 SIM window price",
    "NY amy hard copy",
  ];
  return products;
});

