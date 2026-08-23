<!-- @regression @search

Feature: Product Search

  Scenario: Search using valid product name
    Given the user navigates to the Products page
    When the user searches product "Top"
    Then matching products should be displayed

  Scenario: Search using invalid product name
    Given the user navigates to the Products page
    When the user searches product "InvalidProduct"
    Then no products found message should be displayed -->