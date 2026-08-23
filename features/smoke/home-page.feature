@smoke @home
Feature: Bekaert Home Page

  Scenario: Verify home page loads successfully
    Given the user navigates to the Bekaert home page
    Then the page title should contain "Bekaert"

  Scenario: Verify URL is correct
    Given the user navigates to the Bekaert home page
    Then the user should be on the Bekaert home page

  Scenario: Verify main navigation is visible
    Given the user navigates to the Bekaert home page
    Then the main navigation should be visible

  Scenario: Verify footer section is visible
    Given the user navigates to the Bekaert home page
    Then the footer section should be visible