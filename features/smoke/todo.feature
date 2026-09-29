@smoke @todo
Feature : Todo Management

 Scenario: Add a new todo item
    Given user launches Todo application
    When User adds todo "Learn Playwright"
    Then Todo count should be 1

 Scenario: Complete a todo item
    Given user launches Todo application
    When User adds todo "Learn Playwright"
    And User marks todo as completed
    Then Todo should be completed.


