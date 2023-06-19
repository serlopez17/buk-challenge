Feature: Sign Up
    As a user
    I want to create an account

    Scenario: Sign up without data - Error Message
        Given I am on the sign up modal
        When I click on 'Sign up' button
        Then I should see 'Please fill out Username and Password.' error message

    Scenario: The user already exists
        When I fill the username and password fields with an already exist account
        Then I should see 'This user already exist.' error message
    
    Scenario: Sign up successfully
        When I fill the username and password
        And I click on 'Sign up' button
        Then I should see 'Sign up successful.' message
