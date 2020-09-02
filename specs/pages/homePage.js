const I = actor();

module.exports = {
    meetingHistoryButton: "#home-go-history",
    scheduleMeetingButton: "#home-go-schedule",
    enterTheMeetingButton: "#home-go-create",
    headerShowSettingsLogoButton: "#header-show-settings",
    headerDropDownMenuGoProfileButton: "#header-go-profile",
    toggleContacts: "#home-toggle-contacts",
    toggleGroups: "#home-toggle-groups",
    newContactButton: "#home-add-contact",
    dropDownMenuDiv: "div.dropdown-menu.settings",
    logOutButton: "#header-go-logout",
    

    verifyAllRequiredElemetsAreOnPage() {
        I.seeElement(this.meetingHistoryButton);
        I.seeElement(this.scheduleMeetingButton);
        I.seeElement(this.enterTheMeetingButton);
        I.seeElement(this.headerShowSettingsLogoButton);
        I.seeElement(this.toggleContacts);
        I.seeElement(this.toggleGroups);
      },

      goToUserProfile() {
        I.waitForElement(this.headerShowSettingsLogoButton);
        I.click(this.headerShowSettingsLogoButton);
        I.waitForElement(this.headerDropDownMenuGoProfileButton);
        I.click(this.headerDropDownMenuGoProfileButton);
      }, 
      
      clickNewContactButton() {
        I.seeElement(this.newContactButton);
        I.click(this.newContactButton);
      },

      logOut() {
        I.waitForElement(this.headerShowSettingsLogoButton);
        I.click(this.headerShowSettingsLogoButton);
        I.seeElement(this.dropDownMenuDiv);
        I.waitForElement(this.logOutButton);
        I.click(this.logOutButton);
      },
    };