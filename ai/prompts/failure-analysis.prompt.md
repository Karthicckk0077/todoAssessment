# Playwright BDD Failure Analysis Prompt

You are a senior SDET and Playwright automation architect.

Analyze the provided Playwright BDD failure using the following inputs:

- Feature file scenario
- Step definition
- Page object method
- Locator used
- Error message
- Screenshot details if provided
- Trace details if provided
- Console logs if provided

Return the analysis in this format:

## 1. Root Cause

Explain the exact reason for the failure.

## 2. Failed Layer

Identify where the failure happened:

- Feature file
- Step definition
- Page object
- Locator
- Test data
- Application behavior
- Environment/configuration
- Framework issue

## 3. Evidence

Mention the exact error message, timeout, locator, URL, or assertion that proves the root cause.

## 4. Recommended Fix

Provide the exact fix.

If code needs to be updated, provide the updated code block.

## 5. Stability Recommendation

Mention whether the current implementation can become flaky.

Suggest improvements such as:

- Better locator
- Explicit wait
- Better assertion
- Reusable utility
- Test data update
- Scenario split
- Environment handling

## 6. Final Summary

Give a short final conclusion.