const I = actor();

module.exports = {
    toggleGroups: "#home-toggle-groups",

    existedGroupNameInList: "div:nth-child(1)>a#home-group>.group-description",
    createdGroupNameInList: "div:nth-child(2)>a#home-group>.group-description",
    
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

    addContactToGroupModalWindow: "app-add-user-to-group-modal > div >div",
    inputContactForSearch: 'input[formcontrolname="contactSearch"]',
    inputEmailForSearch: 'input[formcontrolname="email"]',
    emailForSearchSendButton: "div.email-question > i",
    lastAddedUser: "div.tag-container > div:last-child span:nth-child(1)",
    findedContact: 'div.ui.relaxed.divided.selection.list > div > div',
    closeAddingContactsToGroupButton:"h3 > div > span > i#chat-close",
    addContactsToGroupButton: 'div > button[type="submit"]',
    lastContactInGroupName: 'div.item:last-child > div.content > div',
    deletelastContactInGroup: "div:last-child > div.icon-wrapper.ng-star-inserted > i",

    selectGroupAdmin: "select#group-admin-select",
    closeEditingGroupButton: "div#modal-div-close i#chat-close",
    saveGroupSettingsButton: "button#submit-group",

    notificationCreatedGroup: 'div#toast-container>div[area-label="Group created successfuly"]',
    notificationAddedUser:'div#toast-container>div[area-label="User added successfuly"]',
  

//   verifyAllRequiredElemetsAreOnPage() {
//   },
    createNewGroupAddMemberFromContacts(newGroupName, newGroupDescription, contactForSearch){
        this.clickOnElement(this.newGroupButton);
        this.enterValueToInputField(this.inputGroupName, newGroupName);
        this.enterValueToInputField(this.inputGroupDescription, newGroupDescription);
        this.clickOnElement(this.addNewGroupButton);
       // I.see(this.notificationCreatedGroup);
        this.enterValueToInputField(this.inputContactForSearch, contactForSearch);
        this.clickOnElement(this.findedContact);
        this.clickOnElement(this.addContactsToGroupButton);

    //    // I.see(this.notificationAddedUser);
        
    //is the group in list, go to group, check title name
        I.waitForEnabled(this.createdGroupNameInList); 
        I.see(`${newGroupName}`, this.createdGroupNameInList); 
        // I.forceClick(this.createdGroupNameInList);
        // I.waitForElement(this.groupName);
        // I.see(`${groupName}`, this.groupName);
        I.wait(5);
        I.forceClick(this.createdGroupNameInList);
        // //check member in group
        // this.clickOnElement(this.groupMembersListButton);
        // I.see(`${contactForSearch}`, this.lastContactInGroupName)
        
    }, 

    writeSendMessage(messageText){
        this.enterValueToInputField(this.inputMessageGroupChat, messageText);
        this.clickOnElement(this.sentMessageGroupChatButton);
        I.waitForElement(this.lastMessageGroupChatText);
        I.seeTextEquals(`${messageText}`, this.lastMessageGroupChatText);
    },

    goToGroup(groupInList, groupName, groupDescription){
        this.clickOnElement(groupInList)
        I.waitForElement(this.groupName);
        I.see(`${groupName}`, this.groupName);
        I.see(`${groupDescription}`, this.groupDescription);
    },

    deleteGroup(){
        this.clickOnElement(this.deleteCreatedGroupButton);
        this.clickOnElement(this.confirmButton);
        //I.dontSeeElementInDOM(this.createdGroupNameInList);
    },
    
    addMemeberFromContactsAndDelete(contactForSearch){
        this.clickOnElement(this.addNewMemberButton);
        this.enterValueToInputField(this.inputContactForSearch, contactForSearch);
        this.clickOnElement(this.findedContact);
        I.waitForElement(this.lastAddedUser);
        I.see(`${contactForSearch}`, this.lastAddedUser);
        this.clickOnElement(this.addContactsToGroupButton);
        I.waitForInvisible(this.addContactToGroupModalWindow);
        this.clickOnElement(this.groupMembersListButton);
        I.waitForElement(this.lastContactInGroupName);
        I.see(`${contactForSearch}`, this.lastContactInGroupName);
        this.clickOnElement(this.deletelastContactInGroup);
        this.clickOnElement(this.confirmButton);
        //check
        //I.dontSeeElementInDOM(this.lastContactInGroupName);
    },

    addMemeberByEmailAndDelete(emailForSearch, emailNameForSearch){
        this.clickOnElement(this.addNewMemberButton);
        this.enterValueToInputField(this.inputEmailForSearch, emailForSearch);
        this.clickOnElement(this.emailForSearchSendButton);

        I.waitForElement(this.lastAddedUser);
        I.see(`${emailForSearch}`, this.lastAddedUser);

        this.clickOnElement(this.addContactsToGroupButton);

        I.waitForInvisible(this.addContactToGroupModalWindow);
        this.clickOnElement(this.groupMembersListButton);
        I.waitForElement(this.lastContactInGroupName);
        I.see(`${emailNameForSearch}`, this.lastContactInGroupName);

        this.clickOnElement(this.deletelastContactInGroup);
        this.clickOnElement(this.confirmButton);
         //check
        //I.dontSeeElementInDOM(this.lastContactInGroupName);

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
