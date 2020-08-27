Feature: TestingGitAction

Scenario Outline: Verify site navigation
  Given I navigate to the site "<url>"
  Examples:
    | url                      |
    | https://www.google.co.uk |
    | *****://**ogle.co.uk     |