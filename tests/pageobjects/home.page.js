import Page from "./page.js";
import { assert } from "chai";
import ProductPage from "./product.page.js";


class HomePage extends Page {

    /**
     * getters to get any selector on this page
     */

    get loginMenuBtn () { return $('#login2') };
    get signUpMenuBtn () { return $('#signin2') };
    get aboutUsMenuBtn () { return $('#navbarExample > ul > li:nth-child(3) > a') };
    get contactMenuBtn () { return $('#navbarExample > ul > li:nth-child(2) > a') };
    get nameOfUser () { return $('#nameofuser') };
    get bodyContainer () { return $('#tbodyid') };
    get categories () { return $$('.list-group #itemc') };
    

    /**
     * methods to encapsule automation code to interact with the page
     */

    async verifyNameOfUserLogged () {
        await this.nameOfUser.waitForDisplayed({timeout: 5000});
        await expect(await this.nameOfUser).toExist();
        assert.equal(await this.nameOfUser.getText(), 'Welcome sergio_test', 'Username dont match');

    }

    async clickOnLogInMenuButton () {
        await this.loginMenuBtn.waitForDisplayed({timeout: 5000});
        await this.loginMenuBtn.click();
    }

    async clickOnSignUpMenuButton () {
        await this.signUpMenuBtn.waitForDisplayed({timeout: 5000});
        await this.signUpMenuBtn.click();
    }

    async clickOnAboutUsMenuButton () {
        await this.aboutUsMenuBtn.waitForDisplayed({timeout: 5000});
        await this.aboutUsMenuBtn.click();
    }

    async clickOnContactMenuButton () {
        await this.contactMenuBtn.waitForDisplayed({timeout: 5000});
        await this.contactMenuBtn.click();
    }

    async getProducts () {
        return await super.getProducts();
    }

    async assertProductDataFromHome (category) {
        const product = await this.getProducts()
        for (let i = 0 ; i < product.length ; i++) {
            await this.moveToCategory(category);
            const title = await product[i].$('.card-title a').getText();
            const price = await product[i].$('h5').getText();
            const description = await product[i].$('#article').getText();
            await product[i].$('.card-title a').waitForClickable({timeout: 5000});
            await product[i].$('.card-title a').click();
            assert.equal(title, await ProductPage.productName.getText(), "Test");
            assert.equal(price + ' *includes tax', await ProductPage.price.getText(), "Test");
            assert.equal(description, await ProductPage.productDescription.getText(), "Test");
            await browser.url('https://www.demoblaze.com/index.html');
        }
    }

    async moveToCategory (category) {
        const cat = await $$('.list-group #itemc')
        if (category === 'phones') {
            await cat[0].waitForDisplayed({timeout:5000});
            await cat[0].click();
        } else if (category === 'laptops') {
            await cat[1].waitForDisplayed({timeout:5000});
            await cat[1].click();
        } else if (category === 'monitors') {
            await cat[2].waitForDisplayed({timeout:5000});
            await cat[2].click();
        }
    }

}

export default new HomePage();