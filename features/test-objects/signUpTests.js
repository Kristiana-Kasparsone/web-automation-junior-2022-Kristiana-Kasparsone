import { pages } from "../support/page";
import { data } from "../support/data"

export class SignUpTest {

    async fillOutSignUpForm() {
        await pages.signUpPage.emailInput().setValue(await data.userData.randomUser.email)
    }
    async pressSignUpButton() {
        await pages.signUpPage.createAccountButton().click({button: "left"})
    }

    async fillOutForm() {
        await pages.createAccountPage.firstNameInput().setValue(await data.userData.randomUser.firstName)
        await pages.createAccountPage.lastNameInput().setValue(await data.userData.randomUser.lastName)
        await pages.createAccountPage.emailInput().setValue(await data.userData.randomUser.email)
        await pages.createAccountPage.passwordInput().setValue(await data.userData.randomUser.password)
        await pages.createAccountPage.addressInput().setValue(await data.userData.randomUser.street)
        await pages.createAccountPage.cityInput().setValue(await data.userData.randomUser.city)
        await pages.createAccountPage.stateDropdown().waitForExist(10000)
        await pages.createAccountPage.stateDropdown().selectByAttribute('value', '11')
        await pages.createAccountPage.zipPostalCodeInput().setValue(await data.userData.randomUser.zipCode)
        await pages.createAccountPage.countryDropdown().selectByIndex(1)
        await pages.createAccountPage.phoneMobileInput().setValue('555-555-1234')
        await pages.createAccountPage.aliasInput().setValue(await data.userData.randomUser.noun)
    }

    async fillOutIncorrectForm() {
        await pages.createAccountPage.firstNameInput().setValue(await data.userData.randomUser.firstName)
        await pages.createAccountPage.emailInput().setValue(await data.userData.randomUser.email)
        await pages.createAccountPage.passwordInput().setValue(await data.userData.randomUser.password)
        await pages.createAccountPage.cityInput().setValue(await data.userData.randomUser.city)
        await pages.createAccountPage.stateDropdown().waitForExist(10000)
        await pages.createAccountPage.stateDropdown().selectByAttribute('value', '2')
        await pages.createAccountPage.zipPostalCodeInput().setValue(await data.userData.randomUser.zipCode)
        await pages.createAccountPage.countryDropdown().selectByIndex(1)
        await pages.createAccountPage.phoneMobileInput().setValue('xxx-xxx-xxxxx')
        await pages.createAccountPage.aliasInput().setValue(await data.userData.randomUser.noun)
    }

    async pressRegistrationButton() {
        await pages.createAccountPage.signUpAccountButton().click({button: "left"})
    }

    async validateSuccessMessage() {
        const successText = await pages.createAccountPage.successMessage()
        await successText.isDisplayed()
        await expect(await successText.getText()).toContain('Welcome to your account.')
    }

    async MyAccountMessage() {
        const text = await pages.createAccountPage.myAccountMessage()
        text.isDisplayed()
        await expect(await text.getText()).toEqual('MY ACCOUNT')
    }
}

export default new SignUpTest()
