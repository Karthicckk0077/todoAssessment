@blocked @regression @navigation
Feature: Bekaert Navigation

  Scenario: Verify Sustainability page navigation
    Given the user navigates to the Bekaert home page
    When the user clicks Sustainability
    Then the Sustainability page should be displayed