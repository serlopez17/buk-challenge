import Page from './page'

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

    }

    async sendMessage () {

    }


}

export default new ContactPage()