

import { assert } from 'chai'
import Page from './page.js';
import HomePage from './home.page.js'
import SignUpPage from './signUp.page.js'

class LoginPage extends Page {

    /**
     * getters to get any selector on this page
     */
    get loginContainer () { return $('#logInModal') };
    get loginTitle () { return $('#logInModalLabel') } ;
    get usernameLabel () { return $('#logInModal > div > div > div.modal-body > form > div:nth-child(1) > label') } ;
    get usernameInput () { return $('#loginusername') } ;
    get passwordLabel () { return $('#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label') } ;
    get passwordInput () { return $('#loginpassword') } ;
    get loginBtn () { return $('#logInModal > div > div > div.modal-footer > button.btn.btn-primary') } ;
    get closeFormBtn () { return $('#logInModal > div > div > div.modal-footer > button.btn.btn-secondary') };


    /**
     * methods to encapsule automation code to interact with the page
     */
    async login (username, password = '1234') {
        await this.usernameInput.waitForClickable({timeout : 5000})
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * This method is also used for click on signup button because the site uses the same modal
     * @param btnName (e.g Log In/Sign Up)
     */
    async clickOnLoginBtn (btnName) {
        if(btnName == 'Log In'){
            await this.loginBtn.waitForClickable({timeout:5000});
            await this.loginBtn.click();
        }else{
            await SignUpPage.signUpButton.waitForClickable({timeout:5000})
            await SignUpPage.signUpButton.click()
        }
    }

    async loginModalAssertion () {
        await expect(await this.loginTitle).toExist();
        await expect(await this.usernameLabel).toExist();
        await expect(await this.usernameInput).toExist();
        await expect(await this.passwordLabel).toExist();
        await expect(await this.passwordLabel).toExist();
    }

    async errorMessageAlert (err) {
        await super.errorMessageAlert(err);
    }

    async closeAlertPopUp () {
        await super.closeAlertPopUp();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return await super.open('');
    }
}

export default new LoginPage();
