import { When } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import SignUpPage from '../pageobjects/signUp.page.js';
import AboutUsPage from '../pageobjects/aboutUs.page.js';
import ContactPage from '../pageobjects/contact.page.js';


/**
 * ------------- SHARED STEPS -------------------
 */

When(/^I click on '(.*?)' button$/, async (btnName) => {
    await LoginPage.clickOnLoginBtn(btnName)
});

/**
 * ----------------- LOGIN ---------------------- 
 */


When(/^I fill my username$/, async () => {
    await LoginPage.login('sergio_test')
});

When(/^I fill password with '(.*?)'$/, async (pwd) => {
    await LoginPage.login('test', pwd)
});

When(/^I fill the form with valid credentials$/, async () => {
    // Change to env variables
    await LoginPage.login(process.env.USERNAME, process.env.PASSWORD)
});

When(/^username should be displayed on the navbar$/, async () => {
    await HomePage.verifyNameOfUserLogged()
});

/**
 * ----------------- SIGN UP ---------------------- 
 */

When(/^I fill the username and password$/, async () => {
    await SignUpPage.SignUp()
});

When(/^I fill the username and password fields with an already exist account$/, async () => {
    await SignUpPage.SignUpWithExistingUser()
});

/**
 * ----------------- ABOUT US ---------------------- 
 */

When(/^I click on play button$/, async () => {
    await AboutUsPage.initVideo()
});

When(/^I want to see all the controls displayed$/, async () => {
    await AboutUsPage.videoPlayerButtonsAssertion();
});

When(/^I click on close btn$/, async () => {
    await AboutUsPage.closeModal();
});

/**
 * ----------------- CONTACT ---------------------- 
 */

When(/^I click on 'Send Message' without fill the Form$/, async () => {
    await ContactPage.clickOnSendMessage()
});

When(/^I fill the form$/, async () => {
    await ContactPage.closeModal()
    await HomePage.clickOnContactMenuButton()
    await ContactPage.fillSendMessage()
});

When(/^click on send message button$/, async () => {
    await ContactPage.clickOnSendMessage()
});








