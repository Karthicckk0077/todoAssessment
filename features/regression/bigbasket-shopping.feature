@blocked @bigbasket @shopping
Feature: BigBasket Shopping Flow

  Scenario: Verify BigBasket home page loads successfully
    Given the user navigates to the BigBasket home page
    Then the BigBasket page title should contain "bigbasket"

  Scenario: Verify search box is visible
    Given the user navigates to the BigBasket home page
    Then the BigBasket search box should be visible

  Scenario: Search for a product
    Given the user navigates to the BigBasket home page
    When the user searches for "milk"
    Then search results should be displayed

  Scenario: Add first product from search results to cart
    Given the user navigates to the BigBasket home page
    When the user searches for "milk"
    And the user adds the first product to cart
    Then the cart should show added product

  Scenario: Increase product quantity in cart
    Given the user navigates to the BigBasket home page
    When the user searches for "milk"
    And the user adds the first product to cart
    And the user increases the product quantity
    Then the updated quantity should be visible

  Scenario: Remove product from cart
    Given the user navigates to the BigBasket home page
    When the user searches for "milk"
    And the user adds the first product to cart
    And the user removes the product from cart
    Then the cart should be empty or product should be removed

  Scenario: Navigate to Fruits and Vegetables category
    Given the user navigates to the BigBasket home page
    When the user opens Fruits and Vegetables category
    Then Fruits and Vegetables products should be displayed

  Scenario: Verify login popup opens
    Given the user navigates to the BigBasket home page
    When the user opens login or account section
    Then the login popup should be displayed

  Scenario: Verify product detail page opens
    Given the user navigates to the BigBasket home page
    When the user searches for "rice"
    And the user opens the first product
    Then the product detail page should be displayed

  Scenario: Verify cart page opens
    Given the user navigates to the BigBasket home page
    When the user opens the cart
    Then the cart page or cart popup should be displayed