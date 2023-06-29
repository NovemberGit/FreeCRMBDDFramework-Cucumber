Feature: Free CRM Login Feature

#Without example keyword
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "bhargavrbhayani@gmail.com" and "SfeWWQi6jr*F"
#Then user clicks on login button
#Then user is on home Page
#Then browser closes


#With example keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home Page
Then browser closes

Examples:
	| username | password |
	| bhargavrbhayani@gmail.com | SfeWWQi6jr*F |
	| tomdom | test123 |
	