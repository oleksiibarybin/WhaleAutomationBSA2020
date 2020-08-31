const landingPage = require("../pages/landingPage");

const expect = require("chai").expect;

Feature("Landing page UI");

Scenario("Check landing page contains LogIn and SisnUp buttons", async (I, landingPage) => {
  I.amOnPage("/");
  I.seeElement(landingPage.logInButton);
  I.seeElement(landingPage.signUpButton);
});