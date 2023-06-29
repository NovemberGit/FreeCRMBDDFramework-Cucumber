$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Work/Project/SeleniumWorkSpace/FreeCrmBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on new contact button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "add \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "browser closes",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "bhargavrbhayani@gmail.com",
        "SfeWWQi6jr*F",
        "Jeff",
        "Bezoz"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "bhargavrbhayani@gmail.com",
        "SfeWWQi6jr*F",
        "David",
        "White"
      ],
      "line": 19,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"bhargavrbhayani@gmail.com\" and \"SfeWWQi6jr*F\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on new contact button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "add \"Jeff\" and \"Bezoz\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 12544362700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 6810600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhargavrbhayani@gmail.com",
      "offset": 13
    },
    {
      "val": "SfeWWQi6jr*F",
      "offset": 45
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 124715100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1045338200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_Page()"
});
formatter.result({
  "duration": 1030440800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_contacts_page()"
});
formatter.result({
  "duration": 61562800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_new_contact_button()"
});
formatter.result({
  "duration": 88467100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeff",
      "offset": 5
    },
    {
      "val": "Bezoz",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.add_and(String,String)"
});
formatter.result({
  "duration": 282795200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_save_button()"
});
formatter.result({
  "duration": 73554000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_closes()"
});
formatter.result({
  "duration": 619625900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"bhargavrbhayani@gmail.com\" and \"SfeWWQi6jr*F\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on new contact button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "add \"David\" and \"White\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click save button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 11168660800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 4719400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhargavrbhayani@gmail.com",
      "offset": 13
    },
    {
      "val": "SfeWWQi6jr*F",
      "offset": 45
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 111836100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1039020100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_Page()"
});
formatter.result({
  "duration": 1039439800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_contacts_page()"
});
formatter.result({
  "duration": 49130900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_new_contact_button()"
});
formatter.result({
  "duration": 84683400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 5
    },
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.add_and(String,String)"
});
formatter.result({
  "duration": 322358500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_save_button()"
});
formatter.result({
  "duration": 65480100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_closes()"
});
formatter.result({
  "duration": 612155100,
  "status": "passed"
});
});