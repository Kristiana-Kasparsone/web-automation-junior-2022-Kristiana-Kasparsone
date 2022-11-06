// const assert = require("assert")
export class CreateAccountPage {
 

    firstNameInput() {
        return $("#customer_firstname")
    }

    lastNameInput() {
        return $("#customer_lastname")
    }

    emailInput() {
        return $("#email")
    }

    passwordInput() {
        return $("#passwd")
    }

    addressInput() {
        return $("#address1")
    }

    cityInput() {
        return $("#city")
    }

    stateDropdown() {
        return $("#id_state")
    }

    zipPostalCodeInput() {
        return $("#postcode")
    }

    countryDropdown() {
        return $("#id_country")
    }

    phoneMobileInput() {
        return $("#phone_mobile")
    }

    aliasInput() {
        return $("#alias")
    }

    signUpAccountButton() {
        return $("#submitAccount")
    }

    successMessage() {
        return $(".info-account")
    }

    myAccountMessage() {
        return $(".page-heading")
    }
}