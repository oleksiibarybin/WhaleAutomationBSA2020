const I = actor();

module.exports = {
    groupsDiv: "div.groups",

    toggleGroups: "#home-toggle-groups",
    groupInList: "home-group",

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

    deleteGroupButton: "i.icon.trash.alternate.outline",
    confirmButton: "#confirmation-modal-confirm",
    cancelButton: "#confirmation-modal-cancel",

    groupName: ".description.group-description",

    notificationCreatedGroup: 'div#toast-container>div[area-label="Group created successfuly"]',
    notificationAddedUser:'div#toast-container>div[area-label="User added successfuly"]',
  

//   verifyAllRequiredElemetsAreOnPage() {
//   },
    createNewGroup(newGroupName, newGroupDescription, contactForSearch){
        this.clickOnElement(this.newGroupButton);
        this.enterValueToInputField(this.inputGroupName, newGroupName);
        this.enterValueToInputField(this.inputGroupDescription, newGroupDescription);
        this.clickOnElement(this.addNewGroupButton);
       // I.see(this.notificationCreatedGroup);
        this.enterValueToInputField(this.inputContactForSearch, contactForSearch);
        this.clickOnElement(this.findedContact);
        this.clickOnElement(this.addContactsToGroup);
       // I.see(this.notificationAddedUser);
        //I.seeElement(`${newGroupName}`, this.groupInList);
        
    }, 

    deleteGroup(){
        I.waitForElement(this.groupsDiv);
        this.clickOnElement(this.deleteGroupButton);
        this.clickOnElement(this.confirmButton);
        I.dontSeeElement(this.groupInList);
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
