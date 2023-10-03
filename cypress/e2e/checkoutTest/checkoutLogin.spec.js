/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import "cypress-iframe";
import "cypress-xpath";
const { type } = require("jquery");

describe("Verify 'Cart' page functionalities", function () {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it("Verify user able to checkout as guest from 'NY' with login", function () {
    cy.visit("http://localhost:3000/ticket-site#/");
    cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.contains("New York").click();
    // 1. Go to Tamice.com
    cy.contains("Login").click();
    // 3. Type valid credential
    cy.get('input[placeholder="Email"]').type("accountKilho@gmail.com");
    cy.get('input[placeholder="Password"]').type("Qwer123$");
    // 4. Click 'Sign in' button
    cy.xpath("//button[contains(text(),'Login')]").click();
    // cy.contains("NY Package Tour").click().invoke("show");
    cy.contains("button", "NY Package Tour").trigger("mouseover").children().contains("NY Big Apple Pass").click({ force: true });
    cy.wait(3000);
    // Go to 'Package' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("Big 2");
    //Add "Big 2" from "Package Tour"
    cy.contains("Adult").click({ force: true }).invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("Guide Tour").click();
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]/div[1]/div[2]").children().eq(1).click({ force: true });
    cy.get("div[role='dialog']");
    cy.wait(2000);
    cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]")
      .children()
      .eq(1)
      .click({ force: true })
      .then((zero) => {
        cy.wrap(zero).eq(0).click();
      });
    cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("NY Amy June 17 Big Apple Pass - regular ticket").click();
    cy.contains("Add to the cart").click({ force: true });
    //Add "Big 3" from "Package Tour"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("Big 3"), { force: true };
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[1]/select[1]").select("Child");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "3");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("NY Amy June 19 Guide Tour ticket Big Apple Pass").click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]/div[4]/div[2]").children().eq(1).click({ force: true });
    cy.get("div[role='dialog']");
    cy.wait(2000);
    cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]")
      .children()
      .eq(15)
      .then((time) => {
        cy.wrap(time).children().eq(1).click();
      });
    cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
    cy.contains("Add to the cart").click();
    cy.contains("Cart").click({ force: true });
    cy.url().should("include", "/cart");
    //Check all the Product exist in the "Shopping Cart"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "Guide");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "NY Amy June 19 Guide Tour ticket Big Apple Pass");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "NY Amy June 17 Big Apple Pass - regular ticket");
  });

  it("Verify user able to checkout as guest from 'SF' with login", function () {
    cy.visit("http://localhost:3000/ticket-site#/");
    cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[1]").click().invoke("show");
    cy.contains("San Francisco").click();
    // 1. Go to Tamice.com
    cy.contains("Login").click();
    // 3. Type valid credential
    cy.get('input[placeholder="Email"]').type("admin1@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    // 4. Click 'Sign in' button
    cy.xpath("//button[contains(text(),'Login')]").click();
    cy.contains("SF Package Tour").click().invoke("show");
    cy.contains("button", "SF Package Tour").trigger("mouseover").children().contains("SF Big Apple Pass").click({ force: true });
    cy.wait(3000);
    // Go to 'Package' page
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("SF Big 2");
    //Add "Big 2" from "Package Tour"
    cy.contains("Adult").click({ force: true }).invoke("show");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "2");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("amy aug 3 - demo guide tour").click({force:true});
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]/div[4]/div[2]").children().eq(1).click({ force: true });
    cy.get("div[role='dialog']");
    cy.wait(2000);
    cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]")
      .children()
      .eq(1)
      .click({ force: true })
      .then((zero) => {
        cy.wrap(zero).eq(0).click();
      });
    cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("Amy SF city test").click();
    cy.contains("Add to the cart").click({ force: true });
    //Add "Big 3" from "Package Tour"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/select[1]").select("SF Big 3"), { force: true };
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[1]/select[1]").select("Child");
    cy.get('img.cursor-pointer[src*="increment.svg"]').click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[2]").should("contain", "3");
    cy.contains('Load More').click()
    cy.wait(1000)
    cy.contains('Load More').click()
    cy.wait(1000)
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]").contains("Sf kilho sep guide tour").click({ force: true });
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[7]/div[12]/div[2]").children().eq(1).click({ force: true });
    cy.get("div[role='dialog']");
    cy.wait(2000);
    cy.xpath("//body/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]")
      .children()
      .eq(17)
      .then((time2) => {
        cy.wrap(time2).children().eq(1).click();
      });
    cy.xpath("//span[contains(text(),'✖')]").click({ force: true });
    cy.contains("Add to the cart").click();
    cy.contains("Cart").click({ force: true });
    cy.url().should("include", "/cart");
    //Check all the Product exist in the "Shopping Cart"
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "amy aug 3 - demo guide tour");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "Amy SF city test");
    cy.xpath("//body/div[@id='root']/div[2]/div[4]/main[1]/div[1]/div[1]/div[1]").should("contain", "Sf kilho sep guide tour");
  });
});
