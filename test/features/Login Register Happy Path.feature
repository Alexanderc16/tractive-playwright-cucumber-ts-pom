Feature: Login/Registration Happy path

  Background:
    Given user navigates to the base URL

#should fail since user gets 403 after registration
  Scenario: Verify user is able to register
    And user verifies "GPS and Health Tracking" text is present
    And user verifies "for Cats and Dogs" text is present
    And user verifies "Sign In" text is present
    And user clicks on "Create Account" text
    And user inputs the "First" registration first name
    And user inputs the "Last" registration last name
    And user inputs the "testing1234@gmail.com" registration email
    And user inputs the "12345678901" registration password
    When user clicks Create Account button
    And user verifies url is "https://my-stage.tractive.com/#/settings/"
    And user verifies "testing1234@gmail.com" text is present
    And user verifies "Manage your Account" text is present
    And user verifies "My Profile" text is present
    And user verifies "Dogs & Cats" text is present
    And user verifies "Trackers & Subscription Plans" text is present
    And user verifies "Refer Friends" text is present
    And user verifies "Billing & Payment" text is present
    And user verifies "General Settings" text is present
    And user verifies "Demo mode" text is present

#should pass but perfectly the test data should be inserted by DB script and not manually
  Scenario: Verify user is able to login
    And user verifies "GPS and Health Tracking" text is present
    And user verifies "for Cats and Dogs" text is present
    And user verifies "Sign In" text is present
    And user inputs the "testing123@gmail.com" login email
    And user inputs the "1234567890" login password
    When user clicks login button
    And user verifies url is "https://my-stage.tractive.com/#/settings/"
    And user verifies "testing123@gmail.com" text is present
    And user verifies "Manage your Account" text is present
    And user verifies "My Profile" text is present
    And user verifies "Dogs & Cats" text is present
    And user verifies "Trackers & Subscription Plans" text is present
    And user verifies "Refer Friends" text is present
    And user verifies "Billing & Payment" text is present
    And user verifies "General Settings" text is present
    And user verifies "Demo mode" text is present
