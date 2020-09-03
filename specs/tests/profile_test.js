const expect = require("chai").expect;

Feature("User profile page UI and functionality");

// Scenario(
//   "Check user ability to change name and surname",
//   async (I, homePage, profilePage) => {
//     I.amOnPage("/");
//     I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//     I.wait(5);
//     I.amOnPage("/home");
//     homePage.goToUserProfile();
//     profilePage.enterSaveCheckUserFirstAndSecondName("Оксана", "Кондратюк");
//     profilePage.enterSaveCheckUserFirstAndSecondName("Oksana", "Kondratiuk");
//   }
// );

// Scenario(
//     "Check user ability to change and delete telephone",
//     async (I, homePage, profilePage) => {
//       I.amOnPage("/");
//       I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//       I.wait(5);
//       I.amOnPage("/home");
//       homePage.goToUserProfile();
//       profilePage.enterSaveCheckUserTelephone("380963453453");
//       profilePage.deleteSaveCheckUserTelephone();
//     },
//   );