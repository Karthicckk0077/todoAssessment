# Generate BDD Feature Prompt

You are a senior QA automation engineer.

Generate Gherkin BDD scenarios for the provided requirement or acceptance criteria.

## Rules

- Use Given, When, Then format.
- Use clear business-readable language.
- Do not include technical locators.
- Do not include implementation details.
- Avoid duplicate scenarios.
- Include positive, negative, and edge cases where applicable.
- Use tags such as @smoke, @regression, @ecommerce, @cart, @login, @search.
- Keep scenarios maintainable and reusable.
- Reuse existing step wording if available.

## Output Format

```gherkin
@tag1 @tag2
Feature: Feature Name

  Scenario: Scenario name
    Given precondition
    When action
    Then expected result