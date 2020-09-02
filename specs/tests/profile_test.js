const expect = require("chai").expect;

Feature("User profile page UI and functionality");

// Scenario(
//   "Check user ability to change name",
//   async (I, homePage, profilePage) => {
//     I.amOnPage("/");
//     I.loginWithGoogle();
//     I.wait(5); //should be changed to waitForDetached spinner
//     I.amOnPage("/home");
//     homePage.goToUserProfile();
//     profilePage.enterSaveCheckUserFirstAndSecondName("Оксана", "Кондратюк");
//     profilePage.enterSaveCheckUserFirstAndSecondName("Oksana", "Kondratiuk");
//   }
// );