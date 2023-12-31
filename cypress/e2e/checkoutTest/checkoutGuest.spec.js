/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import "cypress-iframe";
import "cypress-xpath";
const { type } = require("jquery");

describe("Verify 'Cart' page functionalities", function () {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it("Verify user able to checkout as guest from 'NY' ", function () {
    cy.visit("http://localhost:3000/ticket-site#/");
    // Go to Tamice.com
    cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[1]").click().invoke("show").contains("New York").click();
    // Select City
    cy.contains("button", "NY Package Tour").trigger("mouseover").children().contains("NY Big Apple Pass").click({ force: true });
    cy.wait(3000);
    // Go to 'Package' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("Big 2");
    cy.contains("Adult").click({ force: true }).invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[1]").should("contain", "2");
    cy.contains("Load More").click();
    cy.contains("Load More").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]").contains("tamicetamice").click();
    // 4. Add products
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[12]/div[2]").children().eq(1).click();
    cy.get("div[role='dialog']");
    cy.wait(2000);
    //click '<' from the calendar
    cy.xpath("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]").click();
    cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]").children().eq(1).click();
    cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]").contains("test ticket save").click();
    // Select time from the calendar box
    cy.contains("Add to Cart").click();
    cy.contains("Cart").click();
    cy.url().should("include", "/cart");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "tamicetamice");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "test ticket save");
    // Go to 'Cart' page and check product is in the cart
    cy.contains("Proceed Checkout").click();
    cy.contains("Guest Checkout").click();
    cy.url().should("include", "/cart?guestCheckout=true");
    cy.get('input[placeholder="Full Name (한국이름)"]').clear().type("장길호");
    cy.get('input[placeholder="Last Name"]').clear().type("Chang");
    cy.get('input[placeholder="First Name"]').clear().type("Kilho");
    cy.get('input[placeholder="Email"]').clear().type("kilhotest@gmail.com");
    cy.get('input[placeholder="Retype Email"]').clear().type("kilhotest@gmail.com");
    cy.get('input[placeholder="Phone"]').clear().type("4154444444");
    // Guest info
    cy.iframe(".sq-card-component").find("#cardNumber").type("4111111111111111");
    cy.iframe(".sq-card-component").find("#expirationDate").type("1124");
    cy.iframe(".sq-card-component").find("#cvv").type("111");
    cy.iframe(".sq-card-component").find("#postalCode").type("11111");
    cy.contains("Pay").click({ force: true });
    //Checkout Square
    // cy.getStripeElement('input[data-elements-stable-field-name="cardNumber"]', "4242424242424242");
    // cy.getStripeElement('input[data-elements-stable-field-name="cardExpiry"]', "0425");
    // cy.getStripeElement('input[data-elements-stable-field-name="cardCvc"]', "345");
    // Guest stripe checkout
    cy.contains("Transaction").then(() => {
      cy.contains("Go to My Bookings").click();
    });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]").should("contain", "tamicetamice");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]").should("contain", "test ticket save");
    //Check order exist on the 'My Booking' page
  });

  it("Verify user able to checkout as guest from 'SF' ", function () {
    cy.visit("http://localhost:3000/ticket-site#/");
    // Go to Tamice.com
    cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.contains("San Francisco").click();
    // Select City
    cy.contains("button", "SF Package Tour").trigger("mouseover").children().contains("SF Big Apple Pass").click({ force: true });
    cy.wait(3000);
    // Go to 'Package' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("SF Big 2");
    cy.contains("Adult").click({ force: true }).invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]").contains("SF Amy aug 7 hyperlink test - big apple pass").click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]").contains("amy aug 3 - demo guide tour").click({ force: true });
    // 4. Add products
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[8]/div[2]").children().eq(1).click({ force: true });
    cy.get("div[role='dialog']");
    cy.wait(2000);
    cy.xpath("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]").click();
    cy.xpath("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]").click();
    cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]")
      .children()
      .eq(1)
      .click({ force: true })
      .then((first) => {
        cy.wrap(first).eq(0).click();
      });
    cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
    // Select time from the calendar box
    cy.contains("Add to Cart").click();
    cy.contains("Cart").click();
    cy.url().should("include", "/cart");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "SF Amy aug 7 hyperlink test - big apple pass");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "amy aug 3 - demo guide tour");
    // Go to 'Cart' page and check product is in the cart
    cy.contains("Proceed Checkout").click({ force: true });
    cy.contains("Guest Checkout").click({ force: true });
    cy.url().should("include", "/cart?guestCheckout=true");
    cy.get('input[placeholder="Full Name (한국이름)"]').clear().type("장길호");
    cy.get('input[placeholder="Last Name"]').clear().type("Chang");
    cy.get('input[placeholder="First Name"]').clear().type("Kilho");
    cy.get('input[placeholder="Email"]').clear().type("kilhotest@gmail.com");
    cy.get('input[placeholder="Retype Email"]').clear().type("kilhotest@gmail.com");
    cy.get('input[placeholder="Phone"]').clear().type("4154444444");
    cy.wait(3000);

    cy.iframe(".sq-card-component").find("#cardNumber").type("4111111111111111");
    cy.iframe(".sq-card-component").find("#expirationDate").type("1124");
    cy.iframe(".sq-card-component").find("#cvv").type("111");
    cy.iframe(".sq-card-component").find("#postalCode").type("11111");
    cy.contains("Pay").click({ force: true });

    // Guest Square checkout
    // cy.getStripeElement('input[data-elements-stable-field-name="cardNumber"]', "4242424242424242");
    // cy.getStripeElement('input[data-elements-stable-field-name="cardExpiry"]', "0425");
    // cy.getStripeElement('input[data-elements-stable-field-name="cardCvc"]', "345");
    cy.contains("Pay").click({ force: true });
    // Guest Payment checkout
    cy.contains("Transaction").then(() => {
      cy.contains("Go to My Bookings").click();
    });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]").should("contain", "SF Amy aug 7 hyperlink test - big apple pass");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]").should("contain", "amy aug 3 - demo guide tour");
    //Check order exist on the 'My Booking' page
  });
});
