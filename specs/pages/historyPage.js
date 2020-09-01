const I = actor();

module.exports = {
    headerText: "h2.center.aligned.header",
    historyContendDiv: "div.ui.header ~ div",
    closeHistoryButton: "#history-close",

  verifyAllGroupElemetsAreOnPage(historyHeader) {
    I.seeElement(this.closeHistoryButton);
    I.seeElement(`${historyHeader}`, this.headerText);
    I.seeElement(this.historyContendDiv);
  },


    closeHistory() {
    I.waitForElement(this.closeHistoryButton);
    I.click(this.closeHistoryButton);
  } 
};
