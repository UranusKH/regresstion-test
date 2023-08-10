/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import "cypress-iframe";
import "cypress-xpath";

const { type } = require("jquery");

describe("Verify 'Cart' page functionalities", function () {
  let priceTotal = [];

  beforeEach(() => {
    cy.viewport(1440, 900);
  });

  it("Verify user able to guest checkout", function () {
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
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("Guide Tour").click();
    // Calendar box
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]/div[1]/div[2]").children().eq(1).click();
    cy.get("div[role='dialog']");
    cy.wait(2000);
    cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]").children().eq(1).click();
    cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
    // 5. Go to 'Cart' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("NY Amy June 17 Big Apple Pass - regular ticket").click();
    cy.contains("Add to the cart").click();
    cy.contains("Cart").click();
    cy.url().should("include", "/cart");
    // 6. Verify product is in the 'Cart' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "Guide Tour");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "NY Amy June 17 Big Apple Pass - regular ticket");
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
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("Content test11").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("NY Amy June 19 Guide Tour ticket Big Apple Passr").click();
    cy.contains("Add to the cart").click();
    // 5. Go to 'Cart' page
    cy.contains("Cart").click();
    cy.url().should("include", "/cart");
    // 6. Verify product is in the 'Cart' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]").contains("Content test11").should("exist");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]").contains("NY Amy June 19 Guide Tour ticket Big Apple Pass").should("exist");
  });

  it("Verify user able to continue checkout with login", function () {
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
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("NY Amy June 19 Guide Tour ticket Big Apple Pass").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("Content test11").click();
    cy.contains("Add to the cart").click();

    //Add "Big 3" from "Package Tour"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.get("li").contains("Big 3").click({ force: true });
    cy.contains("Adult").click().invoke("show");
    cy.get("li").contains("Child").click({ force: true });
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "3");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[6]").contains("NY Amy June 17 Big Apple Pass - regular ticket").click();
    cy.contains("Add to the cart").click();
    cy.contains("Cart").click({ force: true });
    cy.url().should("include", "/cart");

    //Check all the Product exist in the "Shopping Cart"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]").contains("Content test11").should("exist");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]").contains("NY Amy June 19 Guide Tour ticket Big Apple Pass").should("exist");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]").contains("NY Amy June 17 Big Apple Pass - regular ticket").should("exist");
  });

  it("Verify user able to checkout as guest", function () {
    // 1. Go to Tamice.com
    cy.visit("http://localhost:3000/ticket-site#/");

    // 2. Go to 'NY BIg Apple Pass' page
    cy.contains("Package Tour").click().invoke("show");
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });

    // 3. Add to Cart
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
    cy.contains("Proceed Checkout").click();
    cy.contains("Guest Checkout").click();
    cy.url().should("include", "/cart?guestCheckout=true");

    //Contact info
    cy.get('input[placeholder="Full Name (한국이름)"]').clear().type("장길호");
    cy.get('input[placeholder="Last Name"]').clear().type("Chang");
    cy.get('input[placeholder="First Name"]').clear().type("Kilho");
    cy.get('input[placeholder="Email"]').clear().type("kilhotest@gmail.com");
    cy.get('input[placeholder="Retype Email"]').clear().type("Kilhotest@gmail.com");
    cy.get('input[placeholder="Phone"]').clear().type("4154444444");

    //Stripe payment
    cy.wait(3000);
    cy.getStripeElement('input[data-elements-stable-field-name="cardNumber"]', "4242424242424242");
    cy.getStripeElement('input[data-elements-stable-field-name="cardExpiry"]', "0425");
    cy.getStripeElement('input[data-elements-stable-field-name="cardCvc"]', "345");
    cy.getStripeElement('input[data-elements-stable-field-name="postalCode"]', "34564");
    cy.contains("Pay").click({ force: true });
    cy.contains("Transaction").then(() => {
      cy.contains("Go to My Bookings").click();
    });
  });
});
