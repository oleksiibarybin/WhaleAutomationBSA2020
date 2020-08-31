const expect = require("chai").expect;

Feature("User profile page UI and functionality");

// Scenario(
//   "#1 Check user ability to change name",
//   async (I, homePage, profilePage) => {
//     I.amOnPage("/");
//     I.loginWithGoogle();
//     I.wait(5); //should be changed to waitForDetached spinner
//     I.amOnPage("/home");
//     homePage.goToUserProfile();
//     profilePage.enterSaveCheckUserFirstAndSecondName("Зоряна", "Чижовська");
//     profilePage.enterSaveCheckUserFirstAndSecondName("Zoriana", "Chyzhovska");2
//   },
// );


Scenario(
  "#2 Check user ability to change and delete telephone",
  async (I, homePage, profilePage) => {
    I.amOnPage("/");
    I.loginWithGoogle();
    I.wait(5); //should be changed to waitForDetached spinner
    I.amOnPage("/home");
    homePage.goToUserProfile();
    profilePage.enterSaveCheckUserTelephone("380985664533");
    profilePage.deleteSaveCheckUserTelephone();
  },
);
