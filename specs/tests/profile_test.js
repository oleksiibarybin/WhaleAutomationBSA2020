const expect = require("chai").expect;
const credentials = require('../testData.json');

Feature("User profile page UI and functionality");

Before((I) => {
  I.amOnPage("/");
  I.loginWithGoogle();
  I.wait(5); //should be changed to waitForDetached spinner
});

// Scenario(
//   "#1 Check user ability to change name",
//   async (I, homePage, profilePage) => {
//     I.amOnPage("/home");
//     homePage.goToUserProfile();
//     profilePage.enterSaveCheckUserFirstAndSecondName(credentials.firstName1, credentials.lastName1);
//     profilePage.enterSaveCheckUserFirstAndSecondName(credentials.firstName2, credentials.lastName2);
//   },
// );


// Scenario(
//   "#2 Check user ability to change and delete telephone",
//   async (I, homePage, profilePage) => {
//     I.amOnPage("/home");
//     homePage.goToUserProfile();
//     profilePage.enterSaveCheckUserTelephone(credentials.telephone);
//     profilePage.deleteSaveCheckUserTelephone();
//   },
// );
