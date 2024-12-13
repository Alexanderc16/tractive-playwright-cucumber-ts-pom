import {Given, When} from "@cucumber/cucumber";
import {fixture} from "../../src/hooks/pageFixture";
import LoginPage from "../../src/pages/loginPage";

const loginPage = new LoginPage(fixture.page);

Given('user inputs the {string} login email', async function (string) {
    loginPage.inputLoginEmail(string);
});

Given('user inputs the {string} login password', (string) => {
    loginPage.inputLoginPassword(string);
});

When('user clicks login button', async function () {
    loginPage.clickLoginButton();
});

