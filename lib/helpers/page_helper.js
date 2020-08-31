const config = require("../../codecept.conf.js");
const assert = require("chai").assert;
const expect = require("chai").expect;

class PageHelper extends Helper {
  _before() {
    const { page, browser } = this.helpers.Puppeteer;
    this.page = page;
    this.browser = browser;
    this.err = null;
    this.helpers["Puppeteer"].page.on("pageerror", (error) => {
      this.err = error.toString();
      console.log(error.toString());
    });
  }

  _afterStep() {
    if (this.err) {
      throw new Error(`Browser JS error ${this.err}`);
    }
  }

  // credentials passed as env variables process.env.GOOGLE_EMAIL, process.env.GOOGLE_PWD
  // refactor, bad approach
  async loginWithGoogle() {
    const email = process.env.GOOGLE_EMAIL;
    const pwd = process.env.GOOGLE_PWD;

    await this.page.waitForSelector("#landing-login");
    await this.page.click("#landing-login");

    await this.page.waitForSelector("#login-google");
    await this.page.click("#login-google");

    // wait needed to wait for new target open, can be refactor to use browser.on('targetcreated')
    await this.page.waitFor(5000);

    let pages = await this.browser.pages();
    console.log("pages.length", pages.length);
    let popup = pages[pages.length - 1];

    //check if you are logged in already
    const loggedInLocator = `div[data-email="${email}"]`;
    const loggedIn = await popup.evaluate((el) => {
      return document.querySelector(el) !== null;
    }, loggedInLocator);

    if (loggedIn) {
      await popup.click(loggedInLocator);
      await popup.waitForSelector('input[type="password"]', {
        visible: true,
      });
      await popup.type('input[type="password"]', pwd);
      await popup.click("#passwordNext");
    } else {
      await popup.waitForSelector('input[type="email"]');
      await popup.type('input[type="email"]', email, {
        delay: 50,
      });
      await popup.click("#identifierNext");

      await popup.waitForSelector('input[type="password"]', {
        visible: true,
      });
      await popup.type('input[type="password"]', pwd);

      await popup.waitForSelector("#passwordNext", {
        visible: true,
      });
      await popup.click("#passwordNext");
    }
  }

  async closeBrowser() {
    await this.browser.close();
  }

  //   async enterValueToInputField(element, value) {
  //     const { page } = this.helpers.Puppeteer;
  //     const el = await page._locate(element);
  //     //this.page = page;
  //     //await e.waitForElement(element);
  //     await el.type("");
  //     await el.type(value);
  //   }
}

module.exports = PageHelper;
