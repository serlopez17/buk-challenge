import Page from './page.js'

class AboutUsPage extends Page{

    /**
     * getters to get any selector on this page
     */

    get initVideoButton () { return $('#example-video > button') };
    get aboutUsTitle () { return $('#videoModalLabel') };
    get playVideoButton () { return $('#example-video > div.vjs-control-bar > button.vjs-play-control.vjs-control.vjs-button.vjs-playing') };
    get pauseVideoButton () { return $('#example-video > div.vjs-control-bar > button.vjs-play-control.vjs-control.vjs-button.vjs-paused') };
    get volumeVideoButton () { return $('#example-video > div.vjs-control-bar > div.vjs-volume-panel.vjs-control.vjs-volume-panel-horizontal > button') };
    get progressBarVideo () { return $('#example-video > div.vjs-control-bar > div.vjs-volume-panel.vjs-control.vjs-volume-panel-horizontal > button') };
    get timeRemaining () { return $('#example-video > div.vjs-control-bar > div.vjs-remaining-time.vjs-time-control.vjs-control > span.vjs-remaining-time-display') };
    get pipButton () { return $('#example-video > div.vjs-control-bar > button.vjs-picture-in-picture-control.vjs-control.vjs-button') };
    get fullScreenButton () { return $('#example-video > div.vjs-control-bar > button.vjs-fullscreen-control.vjs-control.vjs-button') };
    get closeModalButton () { return $('#videoModal > div > div > div.modal-footer > button') };
    get videoContainer ()  { return $('#example-video') };


    /**
     * methods to encapsule automation code to interact with the page
     */

    async initVideo () {
        await this.initVideoButton.waitForClickable({timeout:5000});
        await this.initVideoButton.click();
        
    }

    async videoPlayerButtonsAssertion () {
        await this.playVideoButton.waitForDisplayed()
        await expect(await this.playVideoButton).toExist();
        await expect(await this.volumeVideoButton).toExist();
        await expect(await this.progressBarVideo).toExist();
        await expect(await this.timeRemaining).toExist();
        await expect(await this.pipButton).toExist();
        await expect(await this.fullScreenButton).toExist();
        await expect(await this.closeModalButton).toExist();
        await expect(await this.aboutUsTitle).toExist();
    }

    async isPlayingAssertion () {
        const videoCurrentDuration = await this.timeRemaining.getText();
    }

    async closeModal () {
        await this.closeModalButton.waitForClickable();
        await this.closeModalButton.click();
    }

    async open () {
        return await super.open('');
    }

}

export default new AboutUsPage();