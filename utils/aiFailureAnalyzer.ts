import fs from 'fs';

export class AiFailureAnalyzer {

  static async generateFailureReport(
    scenarioName: string,
    errorMessage: string,
    stackTrace?: string
  ): Promise<void> {

    let rootCause = 'Unknown failure.';
    let failedLayer = 'Unknown';
    let recommendedFix = 'Investigate failure manually.';
    let stabilityRisk = 'Medium';

    const error = errorMessage.toLowerCase();

    if (
      error.includes('timeout') ||
      error.includes('waiting for')
    ) {
      rootCause =
        'Element was not found within the expected timeout or application response was slow.';

      failedLayer =
        'Locator / Application Performance';

      recommendedFix =
        'Verify locator stability, page loading, API response times, and use appropriate waits.';

      stabilityRisk = 'High';
    }

    else if (
      error.includes('strict mode violation')
    ) {
      rootCause =
        'Locator matched multiple elements and Playwright could not determine the intended target.';

      failedLayer =
        'Locator';

      recommendedFix =
        'Use a more specific locator by applying role, text, filter, or unique attributes.';

      stabilityRisk = 'Medium';
    }

    else if (
      error.includes('tohaveurl')
    ) {
      rootCause =
        'Navigation assertion failed because the actual URL does not match the expected URL.';

      failedLayer =
        'Assertion / Navigation';

      recommendedFix =
        'Verify navigation flow and ensure redirects are completed before validation.';

      stabilityRisk = 'Low';
    }

    else if (
      error.includes('tobevisible')
    ) {
      rootCause =
        'Expected element was not visible on the screen.';

      failedLayer =
        'Locator / UI';

      recommendedFix =
        'Verify page rendering, visibility conditions, and locator correctness.';

      stabilityRisk = 'Medium';
    }

    else if (
      error.includes('tocontaintext')
    ) {
      rootCause =
        'Expected text was not present in the target element or page.';

      failedLayer =
        'Assertion';

      recommendedFix =
        'Verify expected content, test data, and actual application behavior.';

      stabilityRisk = 'Medium';
    }

    else if (
      error.includes('element is not attached')
    ) {
      rootCause =
        'The element became stale because the DOM updated before interaction completed.';

      failedLayer =
        'Application / Locator';

      recommendedFix =
        'Re-locate the element before performing the action and wait for page stability.';

      stabilityRisk = 'High';
    }

    else if (
      error.includes('net::') ||
      error.includes('navigation')
    ) {
      rootCause =
        'Network or navigation failure occurred during test execution.';

      failedLayer =
        'Environment / Application';

      recommendedFix =
        'Verify connectivity, application availability, and environment stability.';

      stabilityRisk = 'High';
    }

    const failureReport = `
# Playwright Failure Analysis

## Scenario
${scenarioName}

## Error
${errorMessage}

## Stack Trace
${stackTrace || 'Not Available'}

## AI Analysis

### Root Cause
${rootCause}

### Failed Layer
${failedLayer}

### Recommended Fix
${recommendedFix}

### Stability Risk
${stabilityRisk}
`;

    fs.mkdirSync('ai/runtime', {
      recursive: true
    });

    fs.writeFileSync(
      'ai/runtime/latest-failure-analysis.md',
      failureReport
    );
  }
}