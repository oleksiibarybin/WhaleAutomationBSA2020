const I = actor();

module.exports = {
    addNewContactModalDiv: ".ui.mini.modal",
    headerContactDiv: "div.header",
    emailOfContactInput: "input.ng-untouched.ng-pristine.ng-invalid",
    addNewContactButton: "#submit-contact",
    closeModalButton: "modal-close",
    successContactAddText: "div.toast-message.ng-star-inserted",
    contactsContainerDiv: "div.contacts-container",
    addedContact: "div.description",
    modalWindow: "div.modal.visible.active",
    confirmationButtonDiv: "#confirmation-modal-confirm",

  verifyAllRequiredControlsAreOnContactsPage() {
        I.waitForElement(this.addNewContactModalDiv);
        I.seeElement(this.headerContactDiv);
        // I.seeElement(this.emailOfContactInput);
        I.seeElement(this.addNewContactModalDiv);
        I.seeElement(this.closeModalButton);
    },

  AddNewContact(userEmail, userName) {
        I.waitForElement(this.addNewContactModalDiv);
        this.clickOnElement(this.emailOfContactInput);
        this.enterValueToInputField(this.emailOfContactInput, userEmail);
        this.clickOnElement(this.addNewContactButton);
        // I.waitForElement(this.successContactAddText);
        // I.see('Request has been sent',this.successContactAddText);
        I.waitForElement(this.addedContact);
        I.see(userName,this.addedContact);
    },

  DeleteContact() {
      I.waitForElement(this.contactsContainerDiv);
      this.clickOnElement(this.addedContact);
      I.waitForElement(this.modalWindow);
      this.clickOnElement(this.confirmationButtonDiv);
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