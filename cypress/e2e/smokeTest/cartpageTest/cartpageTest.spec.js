/// <reference types="Cypress" />
import "cypress-xpath";
const { type } = require("jquery");

describe("Verify 'Cart' page functionalities", function () {
  let priceTotal = [];

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("Verify user able to add product in the cart", function () {
    // 1. Go to Tamice.com
    // cy.visit(Cypress.env("url"));
    cy.visit("http://localhost:3000/ticket-site#/");
    cy.contains("Package Tour").click().invoke("show");
    // 2. Hove over 'Package Tour' from the navigation bar
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });
    // 3. Click 'NY Big Apple Pass'
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 2").click({ force: true });
    // 4. Add products
    cy.contains("Adult").click().invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("Guide Tour").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("NY Reserve").click();
    cy.contains("Add to the cart").click();
    // 5. Go to 'Cart' page
    cy.contains("Cart").click();
    cy.url().should("include", "/cart");
    // 6. Verify product is in the 'Cart' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "Guide Tour");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "NY Reserve");
  });

  it("User able to subtract product quantity from the '티켓구입' field", function () {
    // 1. Go to Tamice.com
    // cy.visit(Cypress.env("url"));
    cy.visit("http://localhost:3000/ticket-site#/");
    cy.contains("Package Tour").click().invoke("show");
    // 2. Hove over 'Package Tour' from the navigation bar
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });
    // 3. Click 'NY Big Apple Pass'
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 2").click({ force: true });
    // 4. Add products
    cy.contains("Adult").click().invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.get('img.cursor-pointer[src*="decrement.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
  });

  it("User able to add product quantity from the '티켓구입' field", function () {
    // 1. Go to Tamice.com
    // cy.visit(Cypress.env("url"));
    cy.visit("http://localhost:3000/ticket-site#/");
    cy.contains("Package Tour").click().invoke("show");
    // 2. Hove over 'Package Tour' from the navigation bar
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });
    // 3. Click 'NY Big Apple Pass'
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 2").click({ force: true });
    // 4. Add products
    cy.contains("Adult").click().invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "3");
  });

  it("Verify user able to see product detail after clicking tour list", function () {
    // 1. Go to Tamice.com
    // cy.visit(Cypress.env("url"));
    cy.visit("http://localhost:3000/ticket-site#/");
    cy.contains("Package Tour").click().invoke("show");
    // 2. Hove over 'Package Tour' from the navigation bar
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });
    // 3. Click 'NY Big Apple Pass'
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 2").click({ force: true });
    // 4. Add products
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("Amy June 19 Package Tour").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("NY Reserve").click();
    cy.contains("Add to the cart").click();
    // 5. Go to 'Cart' page
    cy.contains("Cart").click();
    cy.url().should("include", "/cart");
    // 6. Verify product is in the 'Cart' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").contains("Amy June 19 Package Tour").should("exist");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").contains("NY Reserve").should("exist");
  });

  it("Verify user able to continue checkout", function () {

    cy.visit("http://localhost:3000/ticket-site#/");
    // 1. Go to Tamice.com
    cy.contains("Login").click();
    // 3. Type valid credential
    cy.get('input[placeholder="Email"]').type("kilhotestaccount@gmail.com");
    cy.get('input[placeholder="Password"]').type("Kilhotest12#");
    // 4. Click 'Sign in' button
    cy.xpath("//button[contains(text(),'Login')]").click();
    cy.contains("Package Tour").click().invoke("show");
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 2").click({ force: true });

    //Add "Big 2" from "Package Tour"
    cy.contains("Adult").click().invoke("show").should("contain", "Adult");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("Guide Tour").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("NY Reserve").click();
    cy.contains("Add to the cart").click();

    //Add "Big 3" from "Package Tour"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 3").click({ force: true });
    cy.contains("Adult").click().invoke("show");
    cy.get("li").contains("Child").click({ force: true });
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "3");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("Amy Guid Tour July 20").click();
    cy.contains("Add to the cart").click();
    cy.contains("Cart").click({ force: true });
    cy.url().should("include", "/cart");

    //Check all the Product exist in the "Shopping Cart"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").each(($el) => {
      // Get the text content of the element and check if it contains 'hello'
      cy.wrap($el).contains('Guide Tour');
    });


    
  });

  it("Verify user able to checkout as guest", function () {
    // 1. Go to Tamice.com
    cy.visit("http://localhost:3000/ticket-site#/");
    // 2. Hove over 'Package Tour' from the navigation bar
    cy.contains("Package Tour").click().invoke("show");
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });
    // 3. Click 'NY Big Apple Pass'
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 2").click({ force: true });
    cy.contains("Adult").click().invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "3");

    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("Amy June 19 Package Tour").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("NY Reserve").click();
    cy.contains("Add to the cart").click();
    // 5. Go to 'Cart' page
    cy.contains("Cart").click();
    cy.url().should("include", "/cart");
    cy.contains("Proceed Checkout").click()
    cy.contains("Guest Checkout").click()
    cy.url().should("include", "/cart?guestCheckout=true");
    // 3. Click 'NY Big Apple Pass'
    // 4. Add products
    // 5. Go to Cart Page
    // 6. Click 'Proceed Checkout' button
    // 7. Click 'Guest Checkout' button
    // 8. Click 'Proceed Checkout' button
  });

  it("Verify user able to checkout with valid credit/debit card", function () {
    // 1. Go to Tamice.com
    // 2. Hove over 'Package Tour' from the navigation bar
    // 3. Click 'NY Big Apple Pass'
    // 4. Add products
    // 5. Go to 'Cart' page
    // 6. Click Proceed Checkout
    // 7. Click 'Login/Sign Up' button
    // 8. Type valid debit/credit card information
    // 9. Click 'Proceed Checkout' button
    // 10. Verify user able to checkout with valid credit/debit card
  });

  context("login", () => {
    //   1. Go to Tamice.com landing page
    //   2. Click 'Login' button
    //   3. Click 'Non-Member Ticket Look up' link
    //   4. Verify 'Email' input field is present on 'Order Lookup' page
    // });
    // it(" Verify 'Order Number' input field is present on 'Order Lookup' page   ", function () {
    //   1. Go to Tamice.com landing page
    //   2. Click 'Login' button
    //   3. Click 'Non-Member Ticket Look up' link
    //   4. Verify 'Order Number' input field is present on 'Order Lookup' page
    // });
    // it(" Verify 'Order Look up' button input field is present on 'Order Lookup' page  ", function () {
    //   1. Go to Tamice.com landing page
    //   2. Click 'Login' button
    //   3. Click 'Non-Member Ticket Look up' link
    //   4. Verify 'Order Look up' button input field is present on 'Order Lookup' page
    // });
  });
});
