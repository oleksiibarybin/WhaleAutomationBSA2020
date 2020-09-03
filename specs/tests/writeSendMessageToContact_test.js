const homePage = require("../pages/homePage");
const contactsPage = require("../pages/contactsPage");
const expect = require("chai").expect;
const credentials = require('../testData.json');


// Scenario(
//     "Check user ability to send messages in chat with another user",
//     async (I, homePage, contactsPage) => {
//         I.amOnPage("/");
//         I.loginWithGoogle(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD);	   
//         I.wait(5);
//         I.amOnPage("/home");
//         contactsPage.goToContact();
//         contactsPage.writeSendMessage(credentials.messageText);
//     }
// )