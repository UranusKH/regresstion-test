/// <reference types="Cypress" />

describe("Verify 'Login' page functionalities", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });
  it("Verify forgot password functionality", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    // 2. Click 'Login/Sign Up' button
    cy.contains("Login").click();
    // 3. Click 'Forgot Password' button
    cy.contains("Forgot Password").click();
    cy.url().should("include", "/user/forgot-password");
    // 4. Type valid 'User email'
    cy.get('input[placeholder="Email"]').type("123456");
    // 5. Click 'Reset Password' button
    cy.contains("Reset password").click();
    // 7. Go to user email and verify user receive reset password link
  });
  it("Verify login functionality", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"))
    // 2. Click 'Login/Sign Up' button
    cy.contains("Login").click()
    // 3. Type valid credential
    cy.get('input[placeholder="Email"]').type("admin1@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    // 4. Click 'Sign in' button
    cy.xpath("//button[contains(text(),'Login')]").click();

  });
  it("Verify Google login functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Google Login' button
    // 4. Choose user id
    // 5. Verify user able to login with google account
  });
  it("Verify Naver login functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Naver Login' button
    // 4. Choose user id
    // 5. Verify user able to login with naver account
  });
  it("Verify create 'Non-Member ticket look up' functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Non-Member ticket lookup' button
    // 4. Type valid 'User email'
    // 5. Type valid user 'Order number'
    // 5. Click 'Order Lookup' button
    // 7. Verify user able see orders in the 'My booking' page
  });
});
