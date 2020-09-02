const homePage = require("../pages/homePage");
const contactsPage = require("../pages/contactsPage");
const expect = require("chai").expect;

Feature("Add new contact request in contacts list and delete it");

// Scenario(
//     "Check user ability to add new request contact in contacts list and delete it",
//     async(I,homePage,contactsPage) => {
//         I.amOnPage("/");
//         I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//         I.wait(5); //should be changed to waitForDetached spinner
//         I.amOnPage("/home");
//         homePage.clickNewContactButton();
//         contactsPage.AddNewContact("anonimhacker932@gmail.com", 'Anonim Hacker');
//         contactsPage.DeleteContactRequest();
//     }
// )