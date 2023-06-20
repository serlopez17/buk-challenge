import { Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js'
import SignUpPage from '../pageobjects/signUp.page.js';
import AboutUsPage from '../pageobjects/aboutUs.page.js';
import ContactPage from '../pageobjects/contact.page.js';
import HomePage from '../pageobjects/home.page.js';


/**
 * ----------------- SHARED STEPS ---------------------- 
 */

Then(/^I should see '(.*?)' error message$/, async (err) => {
    await LoginPage.errorMessageAlert(err)
    await LoginPage.closeAlertPopUp()
});

/**
 * ----------------- LOGIN ---------------------- 
 */

Then(/^form components should be displayed$/, async () => {
    await LoginPage.loginModalAssertion()
});

Then(/^I should log in successfully$/, async () => {
    //Pending to add api call to verify the user was logged
});

/**
 * ----------------- SIGN UP ---------------------- 
 */

Then(/^I should see '(.*?)' message$/, async (err) => {
    await SignUpPage.errorMessageAlert(err)
});

/**
 * ----------------- ABOUT US ---------------------- 
 */

Then(/^video should start playing$/, async () => {
    await AboutUsPage.isPlayingAssertion()
});

Then(/^modal shoudl be close$/, async () => {
    
});

/**
 * ----------------- CONTACT ---------------------- 
 */

Then(/^I should see all labels and inputs displayed$/, async () => {
    await ContactPage.formElementsAssertion()
});

/**
 * ----------------- HOME PAGE ---------------------- 
 */

Then('each {string} should have name, price and description', async (category) => {
    await HomePage.assertProductDataFromHome(category)
});













