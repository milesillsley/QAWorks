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
