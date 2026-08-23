# Framework Architecture

This framework is built using Playwright, TypeScript, and playwright-bdd.

## Purpose

The framework is designed for scalable UI automation using BDD, Page Object Model, reusable fixtures, utilities, and AI/MCP-ready documentation.

## Main Layers

### 1. Feature Files

Location:

features/

Purpose:

Feature files contain business-readable scenarios written in Gherkin syntax.

Rules:

- Use Given, When, Then format.
- Do not add locators inside feature files.
- Do not add technical implementation details.
- Use tags such as @smoke, @regression, @ecommerce, @shopping, @blocked.

Example:

```gherkin
@regression @ecommerce
Scenario: Add first product to cart
  Given the user navigates to the Automation Exercise home page
  When the user adds the first Automation Exercise product to cart
  Then the Automation Exercise product should be added to cart