/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import "cypress-iframe";
import "cypress-xpath";
const { type } = require("jquery");

describe("Verify 'Cart' page functionalities", function () {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  context("New York", () => {
    it("Verify user able to checkout with 'NY Big apple pass + NY City pass + NY City Express + NY Single + Bar/Code + Sim + Hard copy' tickets  ", function () {
      cy.visit("http://localhost:3000/ticket-site#/");
      // Go to Tamice.com
      cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[1]").click().invoke("show").contains("New York").click();
      // Select City
      cy.contains("button", "NY Package Tour").trigger("mouseover").children().contains("NY Big Apple Pass").click({ force: true });
      cy.wait(3000);
      // Go to 'Package' page
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("Big 2");
      cy.contains("Adult").click({ force: true }).invoke("show");
      cy.get('img.cursor-pointer[src*="increment.svg"]').click();
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("Guide Tour").click();
      // 4. Add products
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]/div[1]/div[2]").children().eq(1).click();
      cy.get("div[role='dialog']");
      cy.wait(3000);
      cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]").children().eq(1).click();
      cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("NY Amy June 17 Big Apple Pass - regular ticket").click();
      cy.contains("Add to the cart").click();
      // Select time from the calendar box
      cy.contains("button", "NY Package Tour").trigger("mouseover").children().contains("NY City Pass").click({ force: true });
      cy.contains("Adult").click({ force: true }).invoke("show");
      cy.contains("Add to the cart").click();
      //Go to 'NY City Pass' page and add product
      cy.contains("button", "NY Package Tour").trigger("mouseover").children().contains("NY City Explore Pass").click({ force: true });
      cy.contains("Add to the cart").click();
      //Go to 'NY City Explore Pass' page and add product
      cy.contains("button", "NY Guide Tour").trigger("mouseover").children().contains("NY Doson Tour").click({ force: true });
      cy.wait(3000);
      cy.contains("Load More").click();
      cy.wait(3000);
      cy.contains("amy aug 15 SIM window price").then((parent) => {
        const hello = cy.wrap(parent);
        hello.parent().contains("VIEW DETAIL").click({ force: true });
      });
      cy.wait(3000);
      cy.contains("Add to the cart").click({ force: true });
      //Add 'sim card' ticket
      cy.contains("button", "NY City Attractions").trigger("mouseover").children().contains("NY Activities").click({ force: true });
      cy.wait(3000);
      cy.contains("NY amy hard copy").then((parent) => {
        const hello = cy.wrap(parent);
        hello.parent().contains("VIEW DETAIL").click({ force: true });
      });
      cy.wait(3000);
      cy.contains("Add to the cart").click({ force: true });
      //Add 'hard copy ticket
      cy.contains("Cart").click();
      cy.url().should("include", "/cart");
      // Go to 'Cart' page and check product is in the cart
      cy.checkNYProductNames("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]").then((products) => {
        products.forEach((product) => {
          cy.contains(product).should("be.visible");
        });
      });
      //Verify all the product is in the cart
      cy.contains("Proceed Checkout").click();
      cy.contains("Guest Checkout").click();
      cy.url().should("include", "/cart?guestCheckout=true");
      cy.get('input[placeholder="Full Name (한국이름)"]').clear().type("장길호");
      cy.get('input[placeholder="Last Name"]').clear().type("Chang");
      cy.get('input[placeholder="First Name"]').clear().type("Kilho");
      cy.get('input[placeholder="Email"]').clear().type("kilhotest@gmail.com");
      cy.get('input[placeholder="Retype Email"]').clear().type("kilhotest@gmail.com");
      cy.get('input[placeholder="Phone"]').clear().type("4154444444");
      cy.wait(3000);
      cy.getStripeElement('input[data-elements-stable-field-name="cardNumber"]', "4242424242424242");
      cy.getStripeElement('input[data-elements-stable-field-name="cardExpiry"]', "0425");
      cy.getStripeElement('input[data-elements-stable-field-name="cardCvc"]', "345");
      cy.contains("Pay").click({ force: true });
      cy.wait(3000);
      // Guest Payment checkout
      cy.contains("Go to My Bookings").click();
      cy.wait(3000);
      cy.checkNYProductNames("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]").then((products) => {
        products.forEach((product) => {
          cy.contains(product).should("be.visible");
        });
      });
      //Check order exist on the 'My Booking' page
    });
  });

  context("San Francisco", () => {
    it("Verify user able to checkout with 'NY Big apple pass + NY City pass + NY City Express + NY Single + Bar/Code + Sim + Hard copy' tickets  ", function () {
      cy.visit("http://localhost:3000/ticket-site#/");
      // Go to Tamice.com
      cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[1]").click().invoke("show").contains("San Francisco").click();
      // Select City
      cy.contains("button", "SF Package Tour").trigger("mouseover").children().contains("SF Big Apple Pass").click({ force: true });
      cy.wait(3000);
      // Go to 'Package' page
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("SF Big 2");
      cy.contains("Adult").click({ force: true }).invoke("show");
      cy.get('img.cursor-pointer[src*="increment.svg"]').click();
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("amy aug 3 - demo guide tour").click();
      // 4. Add products
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]/div[4]/div[2]").children().eq(1).click();
      cy.get("div[role='dialog']");
      cy.wait(3000);
      cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]").children().eq(1).click();
      cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
      cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("amy aug 3 - schedule and creating regular test").click();
      cy.contains("Add to the cart").click();
      // Select time from the calendar box
      cy.contains("button", "SF Package Tour").trigger("mouseover").children().contains("SF City Pass").click({ force: true });
      cy.contains("Adult").click({ force: true }).invoke("show");
      cy.contains("Add to the cart").click();
      //Go to 'NY City Pass' page and add product
      cy.contains("button", "SF Package Tour").trigger("mouseover").children().contains("SF City Explore Pass").click({ force: true });
      cy.contains("Add to the cart").click();
      //Go to 'NY City Explore Pass' page and add product
      cy.contains("button", "SF Guide Tour").trigger("mouseover").children().contains("SF Doson Tour").click({ force: true });
      cy.wait(3000);
      cy.contains("Load More").click();
      cy.wait(3000);
      cy.contains("SF amy aug15 sim card ticket").then((parent) => {
        const hello = cy.wrap(parent);
        hello.parent().contains("VIEW DETAIL").click({ force: true });
      });
      cy.wait(3000);
      cy.contains("Add to the cart").click({ force: true });
      //Add 'sim card' ticket
      cy.contains("button", "SF City Attractions").trigger("mouseover").children().contains("SF Activities").click({ force: true });
      cy.wait(3000);
      cy.contains("SF amy hard copy").then((parent) => {
        const hello = cy.wrap(parent);
        hello.parent().contains("VIEW DETAIL").click({ force: true });
      });
      cy.wait(3000);
      cy.contains("Add to the cart").click({ force: true });
      //Add 'hard copy ticket
      cy.contains("Cart").click();
      cy.url().should("include", "/cart");
      // Go to 'Cart' page and check product is in the cart

      cy.checkSFProductNames("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").then((products) => {
        products.forEach((product) => {
          cy.contains(product).should("be.visible");
        });
      });
      //Verify all the product is in the cart
      cy.contains("Proceed Checkout").click();
      cy.contains("Guest Checkout").click();
      cy.url().should("include", "/cart?guestCheckout=true");
      cy.get('input[placeholder="Full Name (한국이름)"]').clear().type("장길호");
      cy.get('input[placeholder="Last Name"]').clear().type("Chang");
      cy.get('input[placeholder="First Name"]').clear().type("Kilho");
      cy.get('input[placeholder="Email"]').clear().type("kilhotest@gmail.com");
      cy.get('input[placeholder="Retype Email"]').clear().type("kilhotest@gmail.com");
      cy.get('input[placeholder="Phone"]').clear().type("4154444444");
      cy.wait(3000);
      cy.getStripeElement('input[data-elements-stable-field-name="cardNumber"]', "4242424242424242");
      cy.getStripeElement('input[data-elements-stable-field-name="cardExpiry"]', "0425");
      cy.getStripeElement('input[data-elements-stable-field-name="cardCvc"]', "345");
      cy.contains("Pay").click({ force: true });
      cy.wait(3000);
      cy.contains("Go to My Bookings").click();
      // Guest Payment checkout
      cy.wait(3000);
      cy.checkSFProductNames("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]").then((products) => {
        products.forEach((product) => {
          cy.contains(product).should("be.visible");
        });
      });
      //Check order exist on the 'My Booking' page
    });
  });
});
