Feature: Log in to the site
    As a user
    I want to login on Demoblaze
    
    Scenario: Error for empty fields
      Given I am on the login modal
      When I click on 'Log In' button
      Then I should see 'Please fill out Username and Password.' error message 

    Scenario: Verify all required fields are present in the form
      Then form components should be displayed

    
    Scenario: Wrong Password
      When I fill my username
      And I fill password with '12345'
      And I click on 'Log In' button
      Then I should see 'Wrong password.' error message


    Scenario: Login Successfully
      When I fill the form with valid credentials
      And I click on 'Log In' button
      Then I should log in successfully

    Scenario: Username Logged displayed
      And username should be displayed on the navbar

    

