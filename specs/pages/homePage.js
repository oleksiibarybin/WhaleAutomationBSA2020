const I = actor();
const genericPage = require("../pages/genericPage");


module.exports = {
  centralContainer: "div.chat.ui.segment",
  meetingHistoryButton:	'#home-go-history',
  scheduleMeetingButton: '#home-go-schedule',
  enterMeetingButton:	'#home-go-create',
  contactsToggleButton:	'#home-toggle-contacts',
  addNewContactButton:	'#home-add-contact',
  contactsBlocks:	'#home-contact',
  groupsToggleButton:	'#home-toggle-groups',
  addNewGroupButton:	'#home-add-group',
  notificationButton:	'#header-show-notifications',
  headerShowSettingsLogoButton:	'#header-show-settings',
  headerGoHomeLogoButton:	'#header-go-home',
  headerDropDownMenuGoProfileButton:	'#header-go-profile',
  headerDropDownMenuGoSettingsButton:	'#header-go-settings',
  headerDropDownMenuLogOutButton:	'#header-go-logout',


  verifyAllRequiredElemetsAreOnPage() {
    I.seeElement(this.meetingHistoryButton);
    I.seeElement(this.scheduleMeetingButton);
    I.seeElement(this.enterTheMeetingButton);
    I.seeElement(this.headerShowSettingsLogoButton);
  },

  goToUserProfile() {
    genericPage.clickOnElement(this.headerShowSettingsLogoButton);
    genericPage.clickOnElement(this.headerDropDownMenuGoProfileButton);
  },

  logOut() {
    genericPage.clickOnElement(this.headerShowSettingsLogoButton);
    genericPage.clickOnElement(this.headerDropDownMenuLogOutButton);
  },
  
  
};
