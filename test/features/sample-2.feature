Feature: Playwright site

    Scenario: Check get started link 1
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"

    Scenario: Check get started link 2
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"


    Scenario: Check get started link 3
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"
