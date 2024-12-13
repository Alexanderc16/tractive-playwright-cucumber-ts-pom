import {LaunchOptions, chromium, firefox, webkit} from "@playwright/test";
import {BASE_CONFIG} from "../util/config";

const options: LaunchOptions = {
    headless: BASE_CONFIG.HEADLESS
}
export const invokeBrowser = () => {
    switch (BASE_CONFIG.BROWSER) {
        case "chromium":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!")
    }

}
