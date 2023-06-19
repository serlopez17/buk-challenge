import Page from './page'
class CartPage extends Page{

    /**
     * getters to get any selector on this page
     */

    get loginMenuBtn () { return $('#login2') };

}

export default new CartPage()