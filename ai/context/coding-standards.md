# Coding Standards

## Page Objects

- Locators belong only in page objects.
- Actions belong only in page objects.
- No hardcoded waits.

## Step Definitions

- Must stay thin.
- Must only call page object methods.

## Feature Files

- Business readable.
- No locators.
- No technical implementation details.

## Assertions

- Use AssertionUtil.
- Avoid direct expect() where possible.

## Logging

- Use Logger utility.

## Waits

- Use WaitUtil.