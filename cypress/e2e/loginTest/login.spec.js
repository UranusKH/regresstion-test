/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import "cypress-iframe";
import "cypress-xpath";
const { type } = require("jquery");

describe("Verify 'Sign up' page functionalities", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000/ticket-site#/");
  });
  it("Verify sign up functionality", function () {
    // Get the current date
    // Format the current date as YYYY-MM-DD
    const currentDate = new Date();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const currentDay = String(currentDate.getDate()).padStart(1, "0");
    const formattedDate = `${currentMonth}${currentDay}`;

    // Visit the website
    cy.visit(Cypress.env("url"));
    cy.contains("Sign Up").click();
    cy.contains("Create an account").click();
    cy.url().should("include", "/user/register");

    // Fill in the registration form
    cy.get("input[placeholder='First Name *']").type("Kilho");
    cy.get("input[placeholder='Last Name *']").type("Chang ");
    cy.get("input[placeholder='Email *']").type(`KilhoChang${formattedDate}kh@gmail.com`);
    cy.get("input[placeholder='Retype Email *']").type(`KilhoChang${formattedDate}kh@gmail.com`);
    cy.get("input[placeholder='Password *']").type("Qwer123$");
    cy.get("input[placeholder='Retype password *']").type("Qwer123$");
    cy.get("input[placeholder='Phone']").type("4154444444");
    cy.get("input[type='checkbox']").click();
    cy.xpath("//button[contains(text(),'Sign up')]").click();
    cy.url().should("include", "/user/log-in");

    //Login with the registered account
    cy.get("input[placeholder='Email']").type(`KilhoChang${formattedDate}kh@gmail.com`);
    cy.get("input[placeholder='Password']").type("Qwer123$");
    cy.xpath("//button[contains(text(),'Login')]").click();
  });
});
