Feature: Expandable Body
  In order to look more things at once
  As a reader
  I want to always see titles and be able to expand and collapse the body
  
  @javascript
  Scenario: Listing existing comments
    When I am on the comments page
    Then I should see "This is comment #1" on the screen within "#allComments"
    And I should not see "This is the body of comment 1" on the screen within "#allComments"
