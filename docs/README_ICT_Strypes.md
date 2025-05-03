
#  ICT Strypes – Inflation Dashboard Automation

This repository contains automated UI tests for Inflation Dashboard using Playwright and TypeScript, following the **Page Object Model (POM)** pattern.

---

# Project Setup

Install Dependencies

```bash
npm install
npm init playwright@latest
```

---

## Run Tests

 Run all tests (headless)

```bash
npx playwright test
```

### Run tests in browser (headed)

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/dashboard.spec.ts
```

---

## Locator Debugging

### Use Playwright Codegen to Find Correct Locators

```bash
npx playwright codegen https://app.fabric.microsoft.com/...
```

This opens a browser and shows working locators as you click around.

---

## Visual Debugging

Debug with Browser Open

```bash
npx playwright test --headed --debug
```
