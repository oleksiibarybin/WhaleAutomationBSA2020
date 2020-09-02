const expect = require("chai").expect;
const credentials = require('../testData.json');

Feature("Groups functionality");

Before((I) => {
    I.amOnPage("/");
    I.loginWithGoogle();
    I.wait(5); //should be changed to waitForDetached spinner
  });

Scenario(
  "#1 Check user ability to create new group with member, send message and delete group",
  async (I, homePage, groupPage) => {
    I.amOnPage("/home");
    groupPage.createNewGroupAddContact(credentials.newGroupName, credentials.newGroupDescription, credentials.contactForSearch);
    groupPage.goToGroupWriteSendMessageCheck(credentials.newGroupName, credentials.messageText);
    groupPage.deleteGroup();
  },
);

