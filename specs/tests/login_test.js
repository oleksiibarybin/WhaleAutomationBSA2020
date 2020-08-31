const landingPage = require("../pages/landingPage");

const expect = require("chai").expect;

Feature("Log in");

After((I) => {
  I.click("#header-show-settings");
  I.waitForElement("#header-go-logout");
  I.click("#header-go-logout");
});

Scenario("Check home page on site after login", async (I, homePage) => {
  I.amOnPage("/");
  I.loginWithGoogle();
  I.wait(5); //should be changed to waitForDetached spinner
  I.amOnPage("/home");
  I.seeElement(homePage.centralContainer);
});

Scenario("Check landing page on site after logout", async (I, homePage, landingPage) => {
  I.amOnPage("/");
  I.loginWithGoogle();
  I.wait(5); //should be changed to waitForDetached spinner
  // I.amOnPage("/home");
  // I.seeElement(homePage.centralContainer);

  homePage.logOut();
  I.seeElement(landingPage.appDescriptionContainer);
});


