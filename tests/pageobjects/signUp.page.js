import { assert } from 'chai'
import Page from './page.js'
import HomePage from './home.page.js'
import { userName, signUpPassword, userNameExist } from '../../constants/utils.js'


class SignUpPage extends Page {

    /**
     * getters to get any selector on this page
     */
    get signUpTitle () { return $('#signInModalLabel') };
    get usernameLabel () { return $('#signInModal > div > div > div.modal-body > form > div:nth-child(1) > label') };
    get usernameInput () { return $('#sign-username') };
    get passwordLabel () { return $('#signInModal > div > div > div.modal-body > form > div:nth-child(2) > label') };
    get passwordInput () { return $('#sign-password') };
    get closeButton () { return $('#signInModal > div > div > div.modal-footer > button.btn.btn-secondary') };
    get signUpButton () { return $('#signInModal > div > div > div.modal-footer > button.btn.btn-primary') };


    /**
     * methods to encapsule automation code to interact with the page
     */


    async SignUp () {
        await this.usernameInput.waitForClickable({timeout: 5000});
        await this.usernameInput.setValue(userName);
        await this.passwordInput.setValue(signUpPassword);
        await this.signUpButton.click();
    }

    async SignUpWithExistingUser () {
        await this.usernameInput.waitForClickable({timeout: 5000});
        await this.usernameInput.setValue(userNameExist);
        await this.passwordInput.setValue(signUpPassword);
        await this.signUpButton.click();
    }

    async errorMessageAlert (err) {
        await super.errorMessageAlert(err);
    }

    async open () {
        return await super.open('');
    }

}

export default new SignUpPage();