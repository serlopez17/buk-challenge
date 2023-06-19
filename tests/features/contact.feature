Feature: Contact Message
As a user
I want to sent a contact Message

    Scenario: Verify Form
        Given I am on the contact modal
        Then I should see all labels and inputs displayed

    Scenario: Send Message - SP
        When I click on 'Send Message' without fill the Form
        Then I should see 'Please fill out email, name and messague' error message

    Scenario: Send Message - HP
        When I fill the form
        And click on send message button
        Then I should see 'Thanks for the message!!' message