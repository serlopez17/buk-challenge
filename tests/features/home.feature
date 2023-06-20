Feature: Verify Products Data
As a QA
I want to verify the all product info is fine

    Scenario Outline: Verify "<product>" Products
        Given I am on the "<product>" products page
        Then each "<product>" should have name, price and description

    Examples:
        | product |
        | phones  |
        | laptops |
        | monitors|