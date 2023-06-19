import { assert } from 'chai'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path) {
        return await browser.url(`https://www.demoblaze.com/${path}`)
    }

    async closeAlertPopUp () {
        await browser.acceptAlert();
    }

    async errorMessageAlert (err) {
        await browser.pause(2000)
        const msg = await browser.getAlertText();
        assert.equal(msg, err, 'Error Message mismatch');
    }



}
