import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js'
import SignUpPage from '../pageobjects/signUp.page.js';
import HomePage from '../pageobjects/home.page.js';


/**
 * ----------------- LOGIN ---------------------- 
 */
Given(/^I am on the login modal$/, async () => {
    await LoginPage.open('')
    await HomePage.clickOnLogInMenuButton()
});

/**
 * ----------------- SIGN UP ---------------------
 */

Given(/^I am on the sign up modal$/, async () => {
    await SignUpPage.open('')
    await HomePage.clickOnSignUpMenuButton()
});

/**
 * ----------------- ABOUT US ---------------------
 */

Given(/^I am on the about us modal$/, async () => {
    await SignUpPage.open('')
    await HomePage.clickOnAboutUsMenuButton()
});
