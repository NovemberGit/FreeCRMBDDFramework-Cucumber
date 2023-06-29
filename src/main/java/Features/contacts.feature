Feature: Free CRM Create Contacts

Scenario Outline: Free CRM create a new contact scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home Page
Then click on contacts page
Then click on new contact button
Then add "<firstname>" and "<lastname>"
Then click save button
Then browser closes

Examples:
	| username | password | firstname | lastname |
	| bhargavrbhayani@gmail.com | SfeWWQi6jr*F | Jeff | Bezoz |
	| bhargavrbhayani@gmail.com | SfeWWQi6jr*F | David | White |