import { contactEmail, contactName, contactMessage } from '../../constants/utils.js'
import Page from './page.js'


class ContactPage extends Page{

    /**
     * getters to get any selector on this page
     */

    get newMessageTitle () { return $('#exampleModalLabel') };
    get contactEmailLabel () { return $('#exampleModal > div > div > div.modal-body > form > div:nth-child(1) > label') };
    get contactEmailInput () { return $('#recipient-email') };
    get contactNameLabel () { return $('#exampleModal > div > div > div.modal-body > form > div:nth-child(2) > label') };
    get contactNameInput () { return $('#recipient-name') };
    get messageLabel () { return $('#exampleModal > div > div > div.modal-body > form > div:nth-child(3) > label') };
    get messageInput () { return $('#message-text') };
    get closeButton () { return $('#exampleModal > div > div > div.modal-footer > button.btn.btn-secondary') };
    get sendMessage () { return $('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary') };

    async formElementsAssertion() {
        await this.newMessageTitle.waitForDisplayed({timeout: 3000});
        await expect(await this.contactEmailLabel).toExist();
        await expect(await this.contactNameInput).toExist();
        await expect(await this.contactNameLabel).toExist();
        await expect(await this.contactNameInput).toExist();
        await expect(await this.messageLabel).toExist();
        await expect(await this.messageInput).toExist();
        await expect(await this.closeButton).toExist();
        await expect(await this.sendMessage).toExist();

    }

    async fillSendMessage () {
        await this.contactEmailInput.waitForDisplayed({timeout: 5000});
        await this.contactEmailInput.setValue(contactEmail);
        await this.contactNameInput.setValue(contactName);
        await this.messageInput.setValue(contactMessage);
    }

    async clickOnSendMessage () {
        await this.sendMessage.waitForClickable({timeout: 5000});
        await this.sendMessage.click();
    }

    async closeModal () {
        await super.closeAlertPopUp();
    }

    async open (path) {
        return await super.open(path);
    }


}

export default new ContactPage();