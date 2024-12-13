const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Tractive Test Automation Report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "131",
        },
        device: "Mac",
        platform: {
            name: "MacOS",
            version: "15",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Tractive Tech Assignment" },
            { label: "Release", value: "1.0" },
            { label: "Cycle", value: "1" }
        ],
    },
});