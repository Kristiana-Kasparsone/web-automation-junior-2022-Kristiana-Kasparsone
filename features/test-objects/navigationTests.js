import { pages } from "../support/page";

export class NavigationTest {

    async openProductPage() {
        await browser.url("http://automationpractice.com/index.php/")
        await pages.basePage.homePageInfo().waitForDisplayed({timeout : 20000})
    }

    async createAccountButton() {
        await pages.basePage.signInButton().click({button: "left"})
    }

}

export default new NavigationTest()