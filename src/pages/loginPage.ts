import {expect, Page} from "@playwright/test";
import {fixture} from "../hooks/pageFixture";

export default class LoginPage {

    constructor(private page: Page) {
        this.page = page;

    }

    private Elements = {
        loginEmailField: "input[type=\"email\"]",
        loginPasswordField: "'input[type=\"password\"]'",
        loginButton: "button:has-text(\"Sign In\")",
    }

    async inputLoginEmail(email: string): Promise<void> {
        expect(this.page.locator(this.Elements.loginEmailField)).toBeVisible();
        await this.page.locator(this.Elements.loginEmailField).fill(email);
    }

    async inputLoginPassword(password: string): Promise<void> {
        console.log(password);
        await this.page.locator(this.Elements.loginPasswordField).waitFor({state: 'visible'});
        await this.page.locator(this.Elements.loginPasswordField).fill(password);
    }

    async clickLoginButton() {
        await fixture.page.waitForLoadState();
        await this.page.locator(this.Elements.loginButton).click();
    }

}

module.exports = LoginPage;