@bvts332
Feature: Prod-Bvts
    Background: User is Logged In
        Given Login to Application
    @bvts
    Scenario: 0001_Verify admin user is able to login successfully
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        Then  user should successfully logged in
        And I logged out
    @bvts
    Scenario: 0002_Verify invalid user is able to login?
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.wrongPassword"
        Then  user see invalid credential message
    @bvts
    Scenario: 0001_Ability to create new student
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User enters all required information and then clicks Register
        Then Student should successfully created as "student.firstName"
        And I logged out
    @bvts
    Scenario: 0001_Ability to edit existing student
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User update the existing student details
        Then Student should successfully created as "student.updateFirstName"
        And I logged out

    @bvts
    Scenario: 0001_Ability to delete the existing student
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User delete the existing student details
        Then Student should deleted successfully
        And I logged out

    @bvts
    Scenario: 0001_Verify user is able to see No students found message
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User delete all records
        Then User should see No students found message
        And I logged out

         @bvt
    Scenario: 0001_Ability to search by student First Name
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User search by given value "student.studentNandanar"
        Then Student should successfully created as "student.studentNandanar"
       
