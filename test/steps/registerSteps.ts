import {Given, When} from "@cucumber/cucumber";
import RegisterPage from "../../src/pages/registerPage";

let registerPage: RegisterPage;

Given('user inputs the {string} registration first name', async function (string) {
    registerPage.inputRegistrationFirstName(string);
});

Given('user inputs the {string} registration last name', (string) => {
    registerPage.inputRegistrationLastName(string);
});

Given('user inputs the {string} registration email', async function (string) {
    registerPage.inputRegistrationEmail(string);
});

Given('user inputs the {string} registration password', (string) => {
    registerPage.inputRegistrationPassword(string);
});

When('user clicks Create Account button', async function () {
    registerPage.clickRegistrationButton();
});
