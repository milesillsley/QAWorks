# QA Works technical test

### Task
Automate the following acceptance test for the QAWorks.com website:

```
  Feature: Contact Us Page
    As an end user
    I want a contact us Page
    So that I can find out more about QAWorks exciting services!!

    Scenario: Valid Submission
      Given am on the QAWorks Site
      Then I should be able to contact QAWorks with the following information
        | name    | j.Bloggs                                  |
        | subject | test automation                           |
        | email   | j.Bloggs@qaworks.com                      |
        | message | please contact me I want to find out more |
```

###Instructions for running code

This Test was written in Javascript using webdriver.io and jasmine. It runs
locally on a selenium server.

Selenium standalone must be installed, Firefox must also be installed.

To run the tests:
1. Clone this repo and cd into it
2. ```npm install```
3. ```npm install selenium-standalone```
4. ```./node_modules/.bin/selenium-standalone install```
5. ```./node_modules/.bin/selenium-standalone start```
6. in new window open the project folder and run ```npm test```
