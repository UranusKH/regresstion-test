/// <reference types="Cypress" />

describe("Verify 'Landing' page functionalities", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });

  it("Verify 'Home' button on landing page redirected to 'Home' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click Home button from the navigation bar
    cy.contains("Home").click({ force: true });
    //3. Verify Home button on landing page redirect to Home page
    cy.contains("Must See in New York").should("exist");
  });

  it("Verify 'NY Big Apple Pass' button on landing page redirected to 'NY Big Apple Pass' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Hover over "Package Tour" button
    cy.contains("Package Tour").invoke("show");
    // get first li from the hidden box
    cy.get("li").contains("NY Big Apple Pass").click({ force: true });
    //4. Verify NY Big Apple Pass button on landing page redirect to NY Big Apple Pass page
    cy.contains("Big Apple Pass").should("exist");
  });

  it("Verify 'Observation' button on landing page redirected to 'Observation' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Hover over "City Attractions" button
    cy.contains("City Attractions").invoke("show");
    //3. Click "Observations" button
    cy.get("li").contains("Observation(Scenics)").click({
      force: true,
    });
    //4. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.contains("Scenics").should("exist");
  });

  it("Verify 'Musicals & Shows' button on landing page redirected to 'Musicals & Shows' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click "Musicals & Shows"
    cy.contains("Musicals & Shows").click({
      force: true,
    });
    //3. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.contains("Broadway Musicals / Shows").should("exist");
  });

  it("Verify '여행정보' button on landing page redirected to '여행정보' page", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    // 2. Click '여행정보' button
    cy.contains("여행정보").click();
    // 3. Verify user able to land "여행정보" page
    /** Wait until 여행정보 page */
    // cy.url().should("include", "/여행정보");
  });

  it("Verify 'About Us' button on landing page redirected to 'About Us' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click "About Us"
    cy.contains("About Us").click();
    //3. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.contains("Why Tour With Us").should("exist");
  });

  it("Verify 'Guide Tour' button on landing page redirected to 'Guide Tour' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Hover over "Guid Tour"
    cy.contains("Guide Tour").invoke("show");
    //3. Click "Manhattan Day Tour" button
    cy.get("li").contains("Manhattan Day Tour").click({
      force: true,
    });
    //4. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.contains("Manhattan day").should("exist");
  });

  it("Verify 'Cart' button on landing page redirected to 'Cart' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click 'Cart' button
    cy.contains("Cart").click();
    //3. Verify user redirected to 'Cart'page
    cy.url().should("include", "/cart");
    cy.contains("Shopping Cart").should("exist");
  });

  it("Verify 'Login' button on landing page redirected to 'Login' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click 'Login' button
    cy.contains("Login").click();
    //3. Verify user redirected to 'Login'page
    cy.url().should("include", "user/log-in");
  });

  it("Verify 'Sign Up' button on landing page redirected to 'Sign Up' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click 'Sign up' button
    cy.contains("Sign Up").click();
    //3. Verify user redirected to 'Sign up'page
    cy.url().should("include", "user/sign-up");
  });

  it("Verify 'Logo' button on landing page redirected to 'Logo' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click Tamice.com logo button
    cy.get("img[alt='Tamice logo']").first().click({ force: true });
    //3. Verify user redirected to 'Sign up'page
    cy.url().should("eq", "https://thernlovendev.github.io/ticket-site/#/");
  });

  it("Verify 'Contact Us' button on navigation page redirected to 'Contact Us' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click "Contact Us"
    cy.contains("Contact Us").click();
    //3. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.contains("타미스 오피스 찾아 오시는 길").should("exist");
    cy.url().should("include", "/contact");
  });

  it("Verify user able to land 'My Bookings' page after click 'My booking' button under 'My Account' list", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    cy.contains("Login").click();
    // 2. Login with account]
    cy.get('input[placeholder="Email"]').type("admin1@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.xpath("//button[contains(text(),'Login')]").click();
    // 3. Click human icon
    cy.get("img[alt='/ticket-site/assets/icons/profile.svg']")
      .click()
      .invoke("show");
    // 4. Click 'My booking' button under 'My Account' list
    cy.contains("My Bookings").click();
    // 5. Verify user able to land 'My Bookings' page after click 'My Booking' button under 'My Account' lists
    cy.url().should("include", "/my-bookings");
  });

  it("Verify user able to land 'My Account' page after click 'My Account' button", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    // 2. Login with account]
    cy.contains("Login").click();
    cy.get('input[placeholder="Email"]').type("admin1@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.xpath("//button[contains(text(),'Login')]").click();
    // 3. Click 'My booking' button under 'My Account' list
    cy.get("img[alt='/ticket-site/assets/icons/profile.svg']")
      .click()
      .invoke("show");
    cy.contains("My Account").click();
    // 4. Verify user able to land 'My Account' page after click 'My Account' link
    cy.url().should("include", "/user/my-account");
  });

  it("Verify sign out functionality", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    // 2. Click 'Login' button
    cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]")
      .contains("Login")
      .click();
    // 3. Type valid credential
    cy.get('input[placeholder="Email"]').type("admin1@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    // 4. Click 'Login' button
    cy.xpath("//button[contains(text(),'Login')]").click();
    // 5. Click human icon button
    cy.get("img[alt='/ticket-site/assets/icons/profile.svg']")
      .click()
      .invoke("show");
    cy.contains("Sign Out").click();
    // 6. Click 'Sign out' button
    cy.url().should("include", "/ticket-site");
  });
});
