const I = actor();

module.exports = {
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