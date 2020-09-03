const homePage = require("../pages/homePage");
const contactsPage = require("../pages/contactsPage");
const expect = require("chai").expect;

Feature("Add request for adding contact in contacts list");

// Scenario(
//     "Check user ability to create request for adding contact in contacts list",
//     async(I,homePage,contactsPage) => {
//         I.amOnPage("/");
//         I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//         I.wait(5); 
//         I.amOnPage("/home");
//         homePage.clickNewContactButton();
//         contactsPage.AddNewContactRequest("dapofish@gmail.com", "Drerek Apofish");
//     }
// )

// Scenario(
//     "Check user ability to close window with creating request for adding contact in contacts list",
//     async(I,homePage,contactsPage) => {
//         I.amOnPage("/");
//         I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//         I.wait(5); 
//         I.amOnPage("/home");
//         homePage.clickNewContactButton();
//         contactsPage.CloseAddContactWindow();
//     }
// )

