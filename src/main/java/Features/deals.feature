Feature: Deal data creation

Scenario: Free CRM create a new contact scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
| bhargavrbhayani@gmail.com | SfeWWQi6jr*F |
Then user clicks on login button
Then user is on home Page
Then click on deals page
Then user enters deal details
| Discount | 1000 |
Then browser closes