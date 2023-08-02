/// <reference types="Cypress" />

describe("Verify 'My Account' page functionalities", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
  })
  it("Verify user able to edit profile", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"))
    // 2. Click human icon
    cy.contains("Login").click()
    // 3. Click 'My Account' button under 'My Account' list
    cy.get('input[placeholder="Email"]').type("admin1@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.xpath("//button[contains(text(),'Login')]").click();
    // 4. Click 'edit' button
    cy.get("img[alt='/ticket-site/assets/icons/profile.svg']")
    .click()
      .invoke("show");
    cy.contains("My Account").click({ force: true });
    cy.url().should('include', "/user/my-account")
    // 5. Verify user able to edit profile
    cy.contains("Edit Profile").should('exist')
  });
  it("Verify user able to change phone number", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"))
    // 2. Click human icon
    cy.contains("Login").click()
    // 3. Click 'My Account' button under 'My Account' list
    cy.get('input[placeholder="Email"]').type("admin1@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.xpath("//button[contains(text(),'Login')]").click();
    // 4. Click 'edit' button
    cy.get("img[alt='/ticket-site/assets/icons/profile.svg']")
    .click()
      .invoke("show");
    cy.contains("My Account").click({ force: true });
    cy.url().should('include', "/user/my-account")
    // 5. Type valid phone number
    cy.contains("Edit Profile").click()
    cy.get('input[placeholder="Phone"]').type("4444444444");
    // 6. Verify user able to change phone number
  });
  it("Verify user able to change password", function () {
    // 1. Go to Tamice.com
    // 2. Click human icon
    // 3. Click 'My Account' button under 'My Account' list
    // 4. Click 'edit' button
    // 5. Type valid credential
    // 6. Verify user able to change password
  });
  it("Verify user able to delete account", function () {
    // 1. Go to Tamice.com
    // 2. Click human icon
    // 3. Click 'My Account' button under 'My Account' list
    // 4. Click 'Delete Account'
    // 5. User land delete confirmation page
    // 6. Click 'Delete Account' button
    // 7. Verify user able to delete account
  });
});
