# Playwright + Cucumber + TypeScript POM Framework

As a Tech Assignment from Tractive, I received a task to find bugs manually in staging environment and automate the process of login and registration.

This repository provides a robust test automation framework combining [Playwright](https://playwright.dev) for fast and reliable end-to-end testing, [Cucumber](https://cucumber.io/) for behavior-driven development (BDD), and [TypeScript](https://www.typescriptlang.org/) for static typing and maintainable code.

## [Summary of manually found bugs](Tractive Manual Testing Report.pdf)

## Key Features

1. **Behavior-Driven Development**: Write human-readable feature files in Gherkin syntax.
2. **Playwright Integration**: Execute cross-browser tests efficiently.
3. **TypeScript Support**: Leverage TypeScript's static typing for better error detection and maintainable code.
4. **Rich Reporting**: Generate detailed HTML reports with screenshots and test data.
5. **Retry Mechanism**: Re-run failed tests for improved test reliability.

---

## Installation

### Install dependencies:
   ```bash
   npm install
   ```

### Run the tests:
   ```bash
   npm test
   ```

---

## Project Structure

- **`features/`**: Contains Gherkin feature files (`.feature`).
- **`steps/`**: Step definition files to map Gherkin steps to implementation.
- **`pages/`**: Page Object Model (POM) implementation for better test reusability.
- **`util/`**: Contains utilities and helpers for code reusability and portability.
- **`browsers/`**: Contains browser manager for easy and configurable browsers management.

---

### Reports
Test results are saved in the `test-results/` directory. Open the generated HTML report to view execution details, including screenshots for failed tests.

---

## Configuration

- **Playwright**: Update browser options in `playwright.config.ts`.
- **Cucumber**: Adjust test settings in `config/cucumber.js`.

---

## Author

Maintained by Alexandru Sirbu.
Feel free to contact me through <b>alexandru.sirbu.work@outlook.com</b> !
