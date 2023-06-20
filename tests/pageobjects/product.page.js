import Page from './page.js';
import { phones } from '../../constants/phones.js';
import { monitors } from '../../constants/monitors.js';
import { laptops } from '../../constants/laptops.js';
import { assert } from 'chai';

class ProductPage extends Page{

    /**
     * getters to get any selector on this page
     */
    get productName () { return $('#tbodyid > h2') };
    get price () { return $('#tbodyid > h3') };
    get productDescription () { return $('#more-information > p') };
    get addToCart () { return $('#tbodyid > div.row > div > a') };


    async goToProduct (id) {
        await super.goToProductById(id);
    }

    async verifyPhonesData (phones) {
        for (let i in phones) {
            await this.goToProduct(phones[i].id);
            assert.equal(this.productName.getText(), phones[i].name, 'Name');
            assert.equal(this.price.getText(), phones[i].price);
            assert.equal(this.productDescription.getText(), phones[i].description);
        }
    }

}

export default new ProductPage()