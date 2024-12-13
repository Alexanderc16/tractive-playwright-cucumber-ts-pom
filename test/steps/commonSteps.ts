import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import {fixture} from "../../src/hooks/pageFixture";
import {BASE_CONFIG} from "../../src/helper/util/config";


Given("user navigates to the base URL", async function () {
    await fixture.page.goto(BASE_CONFIG.BASE_URL);
    fixture.logger.info("Navigated to the application")
})

Given('user verifies {string} text is present', async function (string: string) {
    await fixture.page.waitForLoadState('domcontentloaded')
    return expect(fixture.page.getByText(string).isVisible());
});

Given('user verifies url is {string}', async function (string: string) {
    await fixture.page.waitForLoadState('domcontentloaded')
    return expect(fixture.page.url() == "https://my-stage.tractive.com/#/settings/");

});

Given('user clicks on {string} text', async function (string: string) {
    await fixture.page.waitForLoadState('domcontentloaded')
    return fixture.page.getByText(string).click();

});

