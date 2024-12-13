import {expect, Page} from "@playwright/test";
import {fixture} from "../hooks/pageFixture";

export default class RegisterPage {

    constructor(private page: Page) {
        this.page = page;
    }

    private Elements = {
        firstname: "input[formcontrolname='firstname']",
        lastname: "input[formcontrolname='lastname']",
        email: "input[formcontrolname='username']",
        password: "input[formcontrolname='password']",
        registrationButton: "button:has-text(\"Create Account\")",
    }


    async inputRegistrationFirstName(firstname: string): Promise<void> {
        expect(this.page.locator(this.Elements.firstname)).toBeVisible();
        await this.page.locator(this.Elements.firstname).fill(firstname);
    }

    async inputRegistrationLastName(lastname: string): Promise<void> {
        expect(this.page.locator(this.Elements.lastname)).toBeVisible();
        await this.page.locator(this.Elements.lastname).fill(lastname);
    }

    async inputRegistrationEmail(email: string): Promise<void> {
        expect(this.page.locator(this.Elements.email)).toBeVisible();
        await this.page.locator(this.Elements.email).fill(email);
    }

    async inputRegistrationPassword(password: string): Promise<void> {
        expect(this.page.locator(this.Elements.password)).toBeVisible();
        await this.page.locator(this.Elements.password).fill(password);
    }

    async clickRegistrationButton() {
        await fixture.page.waitForLoadState();
        await this.page.locator(this.Elements.registrationButton).click();
    }
}

