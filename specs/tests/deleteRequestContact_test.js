const homePage = require("../pages/homePage");
const contactsPage = require("../pages/contactsPage");
const expect = require("chai").expect;

Feature("Create request for adding contact in contacts list and request for deleting this request");

// Scenario(
//     "Check user ability to create request for adding contact in contacts list and request for deleting this request",
//     async(I,homePage,contactsPage) => {
//         I.amOnPage("/");
//         I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//         I.wait(5); 
//         I.amOnPage("/home");
//         homePage.clickNewContactButton();
//         contactsPage.AddNewContactRequest("anonimhacker932@gmail.com", 'Anonim Hacker');
//         contactsPage.DeleteContactRequest();
//     }
// )