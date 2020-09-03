const I = actor();

module.exports = {
    addNewContactModalDiv: ".ui.mini.modal",
    headerContactDiv: "div.header",
    emailOfContactInput: "input.ng-untouched.ng-pristine.ng-invalid",
    addNewContactButton: "#submit-contact",
    closeModalButton: "#modal-close",
    successContactAddText: "div.toast-message.ng-star-inserted",
    succesDeleteContactText: "#toast-container > div > div",
    contactsContainerDiv: "div.contacts-container",
    addedContact: "div.description",
    modalWindow: "div.modal.visible.active",
    confirmationButtonDiv: "#confirmation-modal-confirm",
    deleteContactButton: "i#delete-contact",

    inputMessageContactChat: "textarea#message",
    sendMessageContactChatButton: "button#sendmessage",
    lastMessageContactChatText: ".message-event:last-child  .message >div",


  // verifyAllRequiredControlsAreOnContactsPage() {
  //       I.waitForElement(this.addNewContactModalDiv);
  //       I.seeElement(this.headerContactDiv);
  //       I.seeElement(this.emailOfContactInput);
  //       I.seeElement(this.addNewContactModalDiv);
  //       I.seeElement(this.closeModalButton);
  //   },

  AddNewContactRequest(userEmail, userName) {
        I.waitForElement(this.addNewContactModalDiv);
        this.clickOnElement(this.emailOfContactInput);
        this.enterValueToInputField(this.emailOfContactInput, userEmail);
        this.clickOnElement(this.addNewContactButton);
        I.waitForElement(this.successContactAddText);
        I.seeTextEquals('Request has been sent',this.successContactAddText);
        I.waitForElement(this.addedContact);
        I.see(userName,this.addedContact);
    },

    CloseAddContactWindow() {
      this.clickOnElement(this.closeModalButton);
    },

  DeleteContactRequest() {
      I.waitForElement(this.contactsContainerDiv);
      this.clickOnElement(this.addedContact);
      I.waitForElement(this.modalWindow);
      this.clickOnElement(this.confirmationButtonDiv);
      // I.seeTextEquals('Canceled', this.succesDeleteContactText);
    },

    DeleteContact() {
      I.waitForElement(this.contactsContainerDiv);
      this.clickOnElement(this.addedContact);
      I.wait(1);
      this.clickOnElement(this.deleteContactButton);
      this.clickOnElement(this.confirmationButtonDiv);
      I.wait(3);
      I.dontSeeElementInDOM(this.addedContact);
    },

    goToContact() {
      I.waitForElement(this.contactsContainerDiv);
      this.clickOnElement(this.addedContact);
  },

    writeSendMessage(messageText) {
      this.enterValueToInputField(this.inputMessageContactChat, messageText);
      this.clickOnElement(this.sendMessageContactChatButton);
      I.waitForElement(this.lastMessageContactChatText);
      I.seeTextEquals(`${messageText}`, this.lastMessageContactChatText);
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