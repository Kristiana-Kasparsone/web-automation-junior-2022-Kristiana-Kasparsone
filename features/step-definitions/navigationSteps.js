import {Given, When} from "@wdio/cucumber-framework";
import {tests} from "../support/tests";

Given ("User has opened the landing page", async function() {
    await tests.navigationTest.openProductPage()
})

When ("User presses the Sign In button", async function() {
    await tests.navigationTest.createAccountButton()
})
