const expect = require("chai").expect;
const credentials = require('../testData.json');

Feature("Meeting History functionality");

Before((I) => {
    I.amOnPage("/");
    I.loginWithGoogle();
    I.wait(5); //should be changed to waitForDetached spinner
  });

Scenario(
  "#1 Check user ability to create new group and delete it",
  async (I, homePage, groupPage) => {
    I.amOnPage("/home");
    groupPage.createNewGroup(credentials.newGroupName, credentials.newGroupDescription, credentials.contactForSearch);
    groupPage.deleteGroup();
  },
);