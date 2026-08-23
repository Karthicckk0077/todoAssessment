@regression @ecommerce @shopping
Feature: Automation Exercise Shopping Flow

  Scenario: Verify Automation Exercise home page loads successfully
    Given the user navigates to the Automation Exercise home page
    Then the Automation Exercise page title should contain "Automation Exercise"

  Scenario: Verify Products page opens successfully
    Given the user navigates to the Automation Exercise home page
    When the user opens the Automation Exercise Products page
    Then the Automation Exercise Products page should be displayed

  Scenario: Search for a product
    Given the user navigates to the Automation Exercise home page
    When the user opens the Automation Exercise Products page
    And the user searches Automation Exercise product "Top"
    Then Automation Exercise searched products should be displayed

  Scenario: Open first product detail page
    Given the user navigates to the Automation Exercise home page
    When the user opens the Automation Exercise Products page
    And the user opens the first Automation Exercise product detail
    Then Automation Exercise product detail page should be displayed

  Scenario: Add first product to cart
    Given the user navigates to the Automation Exercise home page
    When the user adds the first Automation Exercise product to cart
    Then the Automation Exercise product should be added to cart

  Scenario: Open cart page
    Given the user navigates to the Automation Exercise home page
    When the user opens the Automation Exercise Cart page
    Then the Automation Exercise Cart page should be displayed

  Scenario: Remove product from cart
    Given the user navigates to the Automation Exercise home page
    When the user adds the first Automation Exercise product to cart
    And the user opens the Automation Exercise Cart page
    And the user removes the Automation Exercise product from cart
    Then the Automation Exercise cart should be empty

  Scenario: Verify Signup Login page opens
    Given the user navigates to the Automation Exercise home page
    When the user opens Automation Exercise Signup Login page
    Then the Automation Exercise Signup Login page should be displayed

  Scenario: Verify Test Cases page opens
    Given the user navigates to the Automation Exercise home page
    When the user opens Automation Exercise Test Cases page
    Then the Automation Exercise Test Cases page should be displayed

  Scenario: Verify subscription section is visible
    Given the user navigates to the Automation Exercise home page
    Then the Automation Exercise subscription section should be visible