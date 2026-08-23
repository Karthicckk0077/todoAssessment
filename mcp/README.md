# MCP Integration Plan

MCP stands for Model Context Protocol.

This framework is being prepared for future AI and MCP integration.

## Goal

The goal of MCP integration is to allow AI tools to understand the automation framework context and assist with:

- BDD scenario generation
- Step definition generation
- Locator review
- Failure analysis
- Test coverage suggestions
- Report analysis
- Flaky test investigation

## Framework Context To Expose

The following folders can be exposed to an MCP-compatible AI tool:

- features/
- steps/
- pages/
- components/
- fixtures/
- config/
- utils/
- test-data/
- playwright-report/
- test-results/

## Planned MCP Use Cases

### 1. Generate Feature Files

AI reads acceptance criteria and framework context, then generates Gherkin scenarios.

### 2. Generate Step Definitions

AI reads existing step files and generates matching step definitions without duplicates.

### 3. Review Locators

AI reviews locators from page objects and suggests more stable Playwright locators.

### 4. Analyze Failures

AI reads Playwright errors, screenshots, traces, and page object logic to identify root cause.

### 5. Suggest Coverage Gaps

AI compares feature files against acceptance criteria and suggests missing scenarios.

## MCP Safety Rules

- AI-generated code must be reviewed before committing.
- AI should not directly modify production tests without review.
- AI should not generate duplicate step definitions.
- AI should follow framework coding standards.
- AI should keep locators inside page object files only.

## Current Status

MCP setup is documented but not yet connected to a live MCP server.

This folder is prepared for future integration.