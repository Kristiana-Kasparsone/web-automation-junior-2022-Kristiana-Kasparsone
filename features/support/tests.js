import { NavigationTest } from "../test-objects/navigationTests";
import {SignUpTest} from "../test-objects/signUpTests";

class Tests {
    constructor() {
        this.navigationTest = new NavigationTest()
        this.signUpTest = new SignUpTest()
    }
}

export const tests = new Tests()