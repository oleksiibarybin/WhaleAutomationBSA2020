const homePage = require("../pages/homePage");
const contactsPage = require("../pages/contactsPage");
const expect = require("chai").expect;

Feature("Confirm request for adding an user in contacts list");

// Scenario(
//     "Check user ability to confirm request for adding an user in contacts list",
//     async(I,homePage,contactsPage) => {
//         I.amOnPage("/");
//         I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//         I.wait(5); //should be changed to waitForDetached spinner
//         I.amOnPage("/home");
//         homePage.clickNewContactButton();
//         contactsPage.AddNewContactRequest("dapofish@gmail.com", "Drerek Apofish");
//         homePage.logOut();
//         I.getIncognitoPage();      
//     }
// )
