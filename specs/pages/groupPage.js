const I = actor();

module.exports = {
    groupsDiv: "div.groups",
    toggleGroups: "#home-toggle-groups",

    existedGroupNameInList: "div:nth-child(1)>a#home-group>.group-description",
    createdGroupNameInList: "div:nth-child(2)>a#home-group>.group-description",
    //groupName: ".description.group-description",
    deleteCreatedGroupButton: "div:nth-child(2) > a#home-group > div.icon-wrapper__group > i",
    confirmButton: "#confirmation-modal-confirm",
    cancelButton: "#confirmation-modal-cancel",
    
    groupName: "div.group-chat-info>span.group-chat-label",
    groupDescription: "div.group-chat-info>span.group-chat-label>span",
    leaveGroupButton:  "i#leaveGroup",
    groupMembersListButton: "i#group-members-list",
    addNewMemberButton: "i#add-new-member",
    editGroupButton: "i#edit-group-info",
    closeGroupChatButton: "i#chat-close",
    inputMessageGroupChat: "textarea#message",
    sentMessageGroupChatButton: "button#sendmessage", //wait for available
    lastMessageGroupChatText: ".message-event:last-child  .message >div",


    newGroupButton: "#home-add-group",
    inputGroupName: 'input[name="groupName"]',
    inputGroupDescription: 'input[name="groupDescription"]',
    uploadGroupPhotoButton: "label#group-upload",
    addNewGroupButton: "button#submit-contact",
    cancelNewGroupButton: "button#modal-close",

    inputContactForSearch: 'input[formcontrolname="contactSearch"]',
    findedContact: 'div.ui.relaxed.divided.selection.list > div > div',
    closeAddingContactsToGroup:"h3 > div > span > i#chat-close",
    addContactsToGroup: 'div > button[type="submit"]',

    selectGroupAdmin: "select#group-admin-select",
    closeEditingGroupButton: "div#modal-div-close i#chat-close",
    saveGroupSettingsButton: "button#submit-group",

    notificationCreatedGroup: 'div#toast-container>div[area-label="Group created successfuly"]',
    notificationAddedUser:'div#toast-container>div[area-label="User added successfuly"]',
  

//   verifyAllRequiredElemetsAreOnPage() {
//   },
    createNewGroupAddContact(newGroupName, newGroupDescription, contactForSearch){
        this.clickOnElement(this.newGroupButton);
        this.enterValueToInputField(this.inputGroupName, newGroupName);
        this.enterValueToInputField(this.inputGroupDescription, newGroupDescription);
        this.clickOnElement(this.addNewGroupButton);
       // I.see(this.notificationCreatedGroup);
        this.enterValueToInputField(this.inputContactForSearch, contactForSearch);
        this.clickOnElement(this.findedContact);
        this.clickOnElement(this.addContactsToGroup);

    //     I.wait(5);
    //    // I.see(this.notificationAddedUser);
    //     I.waitForElement(this.createdGroupNameInList); 
    //     I.seeElement(` ${newGroupName} `, this.createdGroupNameInList); 
    //     I.wait(5);
    }, 

    goToGroupWriteSendMessageCheck(groupName, messageText){
        I.waitForEnabled(this.createdGroupNameInList);
        I.forceClick(this.createdGroupNameInList);
        I.waitForElement(this.groupName);
        I.see(`${groupName}`, this.groupName);
        this.enterValueToInputField(this.inputMessageGroupChat, messageText);
        this.clickOnElement(this.sentMessageGroupChatButton);
        I.waitForElement(this.lastMessageGroupChatText);
        I.seeTextEquals(`${messageText}`, this.lastMessageGroupChatText);
    },

    deleteGroup(){
        I.waitForElement(this.groupsDiv);
        this.clickOnElement(this.deleteCreatedGroupButton);
        this.clickOnElement(this.confirmButton);
        //I.dontSeeElementInDOM(this.createdGroupNameInList);
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
