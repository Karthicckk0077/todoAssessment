# Playwright Failure Example

Feature:

Search Product

Scenario:

Search using valid product name

Error:

TimeoutError:
locator('#search_product').waitFor()
Timeout 15000ms exceeded

Screenshot:

Search field was not visible.

Console Logs:

[INFO] Opening Products page
[INFO] Searching product: Top

AI Analysis:

## Root Cause

Search input field was not visible within the configured timeout.

## Failed Layer

Locator

## Evidence

Locator:

#search_product

Timeout:

15000ms

## Recommended Fix

Verify whether:

1. Products page loaded completely.
2. Locator changed.
3. WaitUtil should wait for Products page content.

Suggested update:

await WaitUtil.waitForElementVisible(
  this.searchProductInput
);

## Stability Risk

Medium

## Prevention

Use:

- Stable locators
- Explicit wait for page content
- AssertionUtil before interacting with field