const I = actor();
const genericPage = require("../pages/genericPage");


module.exports = {
  userProfileInformationContainer: ".settings",
  uploadNewImageButton: "#profile-openmodal",
  newImageModalWindow: ".modal-content",
  makeNewImagePhotoButton: "#profile-upload-showcamera",
  uploadNewImageFromFileButton: "#profile-upload-closecamera",
  cpatureNewImagePhotoButton: "#profile-upload-capture",
  closeNewImageModalWindowButton: ".close",
  userNameText: "h3.name",
  profileEditNameButton: "#profile-editname button",
  profileSubmitNameButton: "#profile-submit-name",
  newFirstNameInput: "#frstName",
  newSecondNameInput: "#scndName",
  profileEditTelephoneButton: "#profile-edittelephone button",
  newTelephoneInput: "#userTelephone",
  profileSubmitPhoneButton: '#profile-submit-telephone',
  profileRemovePhoneButton: '.remove-telephone-button',
  userPhoneText: ".phone span",

  verifyAllRequiredControlsAreOnPage() {
    I.waitForElement(this.userProfileInformationContainer);
    I.seeElement(this.uploadNewImageButton);
    I.seeElement(this.profileEditNameButton);
    I.seeElement(this.profileEditTelephoneButton);
  },

  enterSaveCheckUserFirstAndSecondName(firstName, secondName) {
    I.waitForElement(this.userProfileInformationContainer);
    genericPage.clickOnElement(this.profileEditNameButton);
    genericPage.enterValueToInputField(this.newFirstNameInput, firstName);
    genericPage.enterValueToInputField(this.newSecondNameInput, secondName);
    genericPage.clickOnElement(this.profileSubmitNameButton);
    I.waitForElement(this.userNameText);
    I.see(`${firstName} ${secondName}`, this.userNameText);
  },

  enterSaveCheckUserPhone(phone) {
    I.waitForElement(this.userProfileInformationContainer);
    genericPage.clickOnElement(this.profileEditTelephoneButton);
    genericPage.enterValueToInputField(this.newTelephoneInput, phone);
    genericPage.clickOnElement(this.profileSubmitPhoneButton);
    I.see(phone, this.userPhoneText);
  },


};
