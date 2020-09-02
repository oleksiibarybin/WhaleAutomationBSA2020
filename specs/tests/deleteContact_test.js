const homePage = require("../pages/homePage");
const contactsPage = require("../pages/contactsPage");
const expect = require("chai").expect;

Feature("Delete contact");

// Scenario(
//     "Check user ability to delete contact",
//     async(I,homePage,contactsPage) => {
//         I.amOnPage("/");
//         I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);
//         I.wait(5);
//         I.amOnPage("/home");
//         contactsPage.DeleteContact();
//     }
// )