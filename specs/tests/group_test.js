const expect = require("chai").expect;
const credentials = require('../testData.json');

Feature("Groups functionality");

Before((I) => {
    I.amOnPage("/");
    I.loginWithGoogle();
    I.wait(5); //should be changed to waitForDetached spinner
  });

Scenario(
  "#1 Check user ability to create new group with member from contacts and delete that group",
  async (I, groupPage) => {
    I.amOnPage("/home");
    groupPage.createNewGroupAddMemberFromContacts(credentials.newGroupName, credentials.newGroupDescription, credentials.contactForSearch);
    groupPage.deleteGroup();
  },
);

Scenario(
    "#2 Check user ability to send message into the group",
    async (I, groupPage) => {
      I.amOnPage("/home");
      groupPage.goToGroup(groupPage.existedGroupNameInList, credentials.existedGroupName);
      groupPage.writeSendMessage(credentials.messageText);
    },
  );
  
  
Scenario(
    "#3 Check user ability to add new member from contacts in existing group and delete him",
    async (I, groupPage) => {
      I.amOnPage("/home");
      groupPage.goToGroup(groupPage.existedGroupNameInList, credentials.existedGroupName, credentials.existedGroupDescription);
      groupPage.addMemeberFromContactsAndDelete(credentials.contactForSearch);
    },
  );
  

Scenario(
    "#4 Check user ability to add new member by email in existing group and delete him",
    async (I, groupPage) => {
      I.amOnPage("/home");
      groupPage.goToGroup(groupPage.existedGroupNameInList, credentials.existedGroupName, credentials.existedGroupDescription);
      groupPage.addMemeberByEmailAndDelete(credentials.emailForSearch, credentials.emailNameForSearch);
    },
  );


Scenario(
    "#5 Check user ability to change group name and description",
    async (I, groupPage) => {
      I.amOnPage("/home");
      groupPage.goToGroup(groupPage.existedGroupNameInList, credentials.existedGroupName, credentials.existedGroupDescription);
      groupPage.changeGroupNameDescription(credentials.newGroupName, credentials.newGroupDescription, credentials.existedGroupName, credentials.existedGroupDescription);
    },
  );