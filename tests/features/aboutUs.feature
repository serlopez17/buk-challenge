Feature: About Us Modal
As a user
I want to see displayed all the elements

    Scenario: Init Video
        Given I am on the about us modal
        When I click on play button
        Then video should start playing

    Scenario: Video Controls Assertion
        And I want to see all the controls displayed

    Scenario: Close About Us Modal
        When I click on close btn
        Then modal shoudl be close