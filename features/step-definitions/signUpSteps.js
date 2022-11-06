import {When, Then } from "@wdio/cucumber-framework";
import {tests} from "../support/tests";
// katram jābūt pēc kārtas un funkcijām arī, samaini ar vietā arī pie signuptest
When ("User enters a new email address", async function() {
    await tests.signUpTest.fillOutSignUpForm()
})

When ("User presses Create account button", async function() {
    await tests.signUpTest.pressSignUpButton()
})


When ("User fills in mandatory user details", async function() {
    await tests.signUpTest.fillOutForm()
})

When ("User fills in incorrect mandatory user details", async function() {
    await tests.signUpTest.fillOutIncorrectForm()
})

When ("User presses the Register button", async function() {
    await browser.pause(4000)
    await tests.signUpTest.pressRegistrationButton()
})

When ("User is logged in", async function() {
    await tests.signUpTest.validateSuccessMessage()
})

Then ("User is in My account page", async function() {
    await tests.signUpTest.MyAccountMessage()
})
