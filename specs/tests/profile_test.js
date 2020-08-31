const expect = require("chai").expect;
const testData = require("../test_data/profileTestData.json");

Feature("User profile page UI and functionality");

Before((I) => {
  I.amOnPage("/");
  I.loginWithGoogle();
  I.wait(5); //should be changed to waitForDetached spinner
});

Scenario("Check landing page contains upload new image, edit name and edit phone buttons", async (I, profilePage) => {
    I.amOnPage(testData.relativeUrl);
    I.seeElement(profilePage.uploadNewImageButton);
    I.seeElement(profilePage.profileEditNameButton);
    I.seeElement(profilePage.profileEditTelephoneButton);
  });

Scenario(
  "Check user ability to change first and second names",
  async (I, homePage, profilePage, genericPage) => {
    I.amOnPage(testData.relativeUrl);

    genericPage.clickOnElement(profilePage.profileEditNameButton);
    genericPage.enterValueToInputField(
      profilePage.newFirstNameInput,
      testData.newFirstName
    );
    genericPage.enterValueToInputField(
      profilePage.newSecondNameInput,
      testData.newFirstName
    );
    genericPage.clickOnElement(profilePage.profileSubmitNameButton);
    I.see(`${testData.newFirstName} ${testData.newFirstName}`, profilePage.userNameText);

    profilePage.enterSaveCheckUserFirstAndSecondName(
      testData.initialFirstName,
      testData.initialSecondName
    );
  });

Scenario(
  "Check user ability to change phone number",
  async (I, profilePage, genericPage) => {
    I.amOnPage(testData.relativeUrl);

    genericPage.clickOnElement(profilePage.profileEditTelephoneButton);
    genericPage.enterValueToInputField(
      profilePage.newTelephoneInput,
      testData.newPhone
    );
    genericPage.clickOnElement(profilePage.profileSubmitPhoneButton);
    I.see(testData.newPhone, profilePage.userPhoneText);

    profilePage.enterSaveCheckUserPhone(testData.initialPhone);
  }
);

Scenario(
    "Check user ability to use delete phone button during changing phone number",
    async (I, profilePage, genericPage) => {
      I.amOnPage(testData.relativeUrl);
  
      genericPage.clickOnElement(profilePage.profileEditTelephoneButton);
      genericPage.enterValueToInputField(
        profilePage.newTelephoneInput,
        testData.newPhone
      );
      I.see(testData.newPhone, profilePage.newTelephoneInput);
      pause();
      genericPage.clickOnElement(profilePage.profileRemovePhoneButton);
      genericPage.clickOnElement(profilePage.profileSubmitPhoneButton);

      I.see("", profilePage.userPhoneText);

      genericPage.clickOnElement(profilePage.profileEditTelephoneButton);
      genericPage.enterValueToInputField(
        profilePage.newTelephoneInput,
        testData.initialPhone
      );
      genericPage.clickOnElement(profilePage.profileSubmitPhoneButton);
    }
  );

