/// <reference types="Cypress" />

describe("Verify 'Sign up' page functionalities", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });
  it("Verify sign up functionality", function () {
    // Get the current date
    const currentDate = new Date();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const currentDay = String(currentDate.getDate()).padStart(1, "0");
    // Format the current date as YYYY-MM-DD
    const formattedDate = `${currentMonth}-${currentDay}`;
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    cy.contains("Sign Up").click();
    // 2. Click 'Login/Sign Up' button
    cy.contains("Create an account").click();
    // 3. Click 'Don't have an account' button
    cy.url().should("include", "/user/register");
    // 4. Click 'Create an Account' button from Sign up page
    cy.get("input[placeholder='First Name *']").type("Kilho");
    cy.get("input[placeholder='Last Name *']").type("Chang ");
    cy.get("input[placeholder='Email *']").type(`KilhoChang${formattedDate}kh@gmail.com`);
    cy.get("input[placeholder='Retype Email *']").type(`KilhoChang${formattedDate}kh@gmail.com`);
    cy.get("input[placeholder='Password *']").type("123456");
    cy.get("input[placeholder='Retype password *']").type("123456");
    cy.get("input[placeholder='Phone']").type("4154444444");
    cy.wait(8000)
    cy.get("input[type='checkbox']").click()
    cy.wait(8000)
    cy.xpath("//button[contains(text(),'Sign up')]").click()
    cy.wait(8000)
    cy.url().should("include", "/user/log-in")

  });
  it("Verify Google sign up functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Don't have an account' button
    // 4. Click 'Google sign up' button from Sign up page
    // 5. Type all valid information
    // 6. Click 'Sign Up'
  });
  it("Verify Naver sign up functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Don't have an account' button
    // 4. Click 'Naver sign up' button from Sign up page
    // 5. Type all valid information
    // 6. Click 'Sign Up'
  });
});
