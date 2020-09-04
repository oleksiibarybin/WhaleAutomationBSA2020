const expect = require("chai").expect;
const credentials = require('../testData.json');

Feature("Meeting History functionality");

Before((I) => {
    I.amOnPage("/");
    I.loginWithGoogle();
    I.wait(5); //should be changed to waitForDetached spinner
  });

Scenario(
  "#1 Check user ability to go to the Meeting History and close it",
  async (I, homePage, historyPage) => {
    I.amOnPage("/home");
    homePage.goToTheMeetingHistory();
    historyPage.verifyAllGroupElemetsAreOnPage(credentials.historyHeader);
    historyPage.closeHistory();
    //historyPage.verifyAllGroupElemetsAreNotOnPage();
    //verify is there three images-buttons at the center
  },
);
