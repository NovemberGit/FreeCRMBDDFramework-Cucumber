$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Work/Project/SeleniumWorkSpace/FreeCrmBDDFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "bhargavrbhayani@gmail.com",
        "SfeWWQi6jr*F"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Discount",
        "1000"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 10075516700,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 4976300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 121341600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1050507600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_home_Page()"
});
formatter.result({
  "duration": 1019444800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.click_on_deals_page()"
});
formatter.result({
  "duration": 2511064100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 1176721200,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.browser_closes()"
});
formatter.result({
  "duration": 607507200,
  "status": "passed"
});
});