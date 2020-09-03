const I = actor();

module.exports = {
    userProfileInformationDiv: ".settings",
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
    userTelephoneText: ".phone>span",
    removeTelephoneButton: "a.remove-telephone-button",
    profileSubmitTelephoneButton: "#profile-submit-telephone",
  
    verifyAllRequiredControlsAreOnPage() {
      I.waitForElement(this.userProfileInformationDiv);
      I.seeElement(this.uploadNewImageButton);
      I.seeElement(this.profileEditNameButton);
      I.seeElement(this.profileEditTelephoneButton);
    },
  
    enterSaveCheckUserFirstAndSecondName(firstName, secondName) {
      I.waitForElement(this.userProfileInformationDiv);
      this.clickOnElement(this.profileEditNameButton);
      this.enterValueToInputField(this.newFirstNameInput, firstName);
      this.enterValueToInputField(this.newSecondNameInput, secondName);
      this.clickOnElement(this.profileSubmitNameButton);
      I.see(`${firstName} ${secondName}`, this.userNameText);
    },

    enterSaveCheckUserTelephone(telephone) {
      I.waitForElement(this.userProfileInformationDiv);
      this.clickOnElement(this.profileEditTelephoneButton);
      this.enterValueToInputField(this.newTelephoneInput, telephone);
      this.clickOnElement(this.profileSubmitTelephoneButton);
      I.see(`${telephone}`, this.userTelephoneText);
    },

    deleteSaveCheckUserTelephone() {
      I.waitForElement(this.userProfileInformationDiv);
      this.clickOnElement(this.profileEditTelephoneButton);
      this.clickOnElement(this.removeTelephoneButton);
      this.clickOnElement(this.profileSubmitTelephoneButton);
      I.dontSee(this.userTelephoneText);
    },
  
    clickOnElement(element) {
      I.waitForElement(element);
      I.click(element);
    },
  
    enterValueToInputField(element, value) {
      I.waitForElement(element);
      I.clearField(element);
      I.fillField(element, value);
    },
  };