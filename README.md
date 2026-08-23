https://img.shields.io/badge/Playwright-Automation-green

https://img.shields

# Bekaert Playwright BDD AI Framework

An enterprise-grade test automation framework built using Playwright, TypeScript, Cucumber BDD, and AI-powered failure analysis.

## 🚀 Overview

This framework is designed to provide scalable, maintainable, and reusable test automation for modern web applications using industry best practices.

## ✨ Features

- Playwright with TypeScript
- Cucumber BDD Integration
- Page Object Model (POM)
- Reusable Components
- Custom Fixtures
- Environment Configuration Support
- Test Data Management
- AI Failure Analysis
- MCP Integration Support
- Screenshot Capture Utility
- HTML Test Reports
- Cross Browser Testing
- Centralized Utilities

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Playwright | Browser Automation |
| TypeScript | Programming Language |
| Cucumber BDD | Behavior Driven Development |
| Node.js | Runtime Environment |
| MCP | AI and Tool Integrations |

---

## 📁 Project Structure

```text
bekaert-playwright-bdd-ai-framework
│
├── components
├── config
├── features
├── fixtures
├── mcp
├── pages
├── reports
├── steps
├── test-data
├── utils
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .env.example
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:

```bash
npm test
```

Run specific tagged tests:

```bash
npm test -- --grep "@regression"
```

Run in headed mode:

```bash
npx playwright test --headed
```

---

## 🥒 Generate BDD Tests

```bash
npm run bdd:gen
```

---

## 📊 Reports

Generate and view Playwright report:

```bash
npx playwright show-report
```

Reports are generated inside:

```text
playwright-report/
```

---

## 🤖 AI Failure Analysis

This framework includes AI-powered failure analysis capabilities to:

- Capture failure screenshots
- Collect execution logs
- Generate structured failure summaries
- Assist with root cause identification
- Improve debugging efficiency

Generated reports are stored in the report directory for review.

---

## 📂 Test Data Management

Test data is maintained separately from test logic.

Benefits:

- Better maintainability
- Reusable data sets
- Easier execution across environments
- Cleaner test implementation

---

## 🌐 Environment Configuration

Environment-specific values are managed using:

```text
.env
.env.example
```

Example:

```env
BASE_URL=https://example.com
USERNAME=testuser
PASSWORD=password
```

---

## ✅ Best Practices Implemented

- Page Object Model
- Reusable Components
- Fixture-Based Architecture
- Centralized Utilities
- Data-Driven Testing
- BDD Framework Structure
- Modular Design
- AI-Assisted Debugging

---

## 👨‍💻 Author

**Karthikeyan K**

Quality Engineer | SDET | Playwright Automation Engineer

---

## 📌 Future Enhancements

- Azure/Open Source LLM Integration
- Self-Healing Locators
- AI Test Case Generation
- AI Generated Test Data
- Smart Failure Clustering
- Automated Defect Suggestions