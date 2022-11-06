import { BasePage } from "../page-objects/basePage";
import { SignUpPage } from "..//page-objects/signUpPage";
import { CreateAccountPage } from "../page-objects/createAccountPage";


class Pages {
    constructor() {
        this.basePage = new BasePage()
        this.signUpPage = new SignUpPage()
        this.createAccountPage = new CreateAccountPage() 
    }
}

export const pages = new Pages()
