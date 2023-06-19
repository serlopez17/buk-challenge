import Page from "./page.js";
import { assert } from "chai";


class HomePage extends Page {

    /**
     * getters to get any selector on this page
     */

    get loginMenuBtn () { return $('#login2') };
    get signUpMenuBtn () { return $('#signin2') };
    get aboutUsMenuBtn () { return $('#navbarExample > ul > li:nth-child(3) > a') }
    get nameOfUser () { return $('#nameofuser') };

    /**
     * methods to encapsule automation code to interact with the page
     */

    async verifyNameOfUserLogged () {
        await this.nameOfUser.waitForDisplayed({timeout: 5000});
        await expect(await this.nameOfUser).toExist();
        assert.equal(await this.nameOfUser.getText(), 'Welcome sergio_test', 'Username dont match')

    }

    async clickOnLogInMenuButton () {
        await this.loginMenuBtn.waitForDisplayed({timeout: 5000})
        await this.loginMenuBtn.click()
    }

    async clickOnSignUpMenuButton () {
        await this.signUpMenuBtn.waitForDisplayed({timeout: 5000})
        await this.signUpMenuBtn.click()
    }

    async clickOnAboutUsMenuButton () {
        await this.aboutUsMenuBtn.waitForDisplayed({timeout: 5000})
        await this.aboutUsMenuBtn.click()
    }

}

export default new HomePage();