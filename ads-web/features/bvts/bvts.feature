@bvtsReq
Feature: Prod-Bvts
    Background: User is Logged In
        Given Login to Application
    @bvts2
    Scenario: TC-1_Ability to create new student
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        Then  user should successfully logged in
        And I logged out

    @bvts2
    Scenario: TC-2_Verify invalid user is able to login?
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.wrongPassword"
        Then  user see invalid credential message

    @bvts
    Scenario: TC-3_Ability to delete the existing student
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User delete the existing student details
        Then Student should deleted successfully
        And I logged out

    @bvt
    Scenario: TC-5_Ability to search by student First Name
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User search by given value "student.studentNandanar"
        Then Student should successfully created as "student.studentNandanar"

    @bvts
    Scenario: TC-6_Ability to search by student Phone number
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User search by given value "student.studentNandanar"
        Then User should see No students found message
        And I logged out

    @bvts
    Scenario: TC-8_Verify No records found with search "buyme"
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User delete all records
        Then User should see No students found message
        And I logged out

    @bvts
    Scenario: TC-12_User ability to logout from Student Information
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        And I logged out

    @bvts
    Scenario: TC-12_Ability to create new student
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User enters all required information and then clicks Register
        Then Student should successfully created as "student.firstName"
        And I logged out
    @bvts
    Scenario: TC-13_Verify user is able to see No students found message
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        And I logged out
    @bvts
    Scenario: TC-14_Ability to edit existing student_Ability to edit existing student
        Given I login with UserName "ttcCommon.emailID" Password "ttcCommon.password"
        When User update the existing student details
        Then Student should successfully created as "student.updateFirstName"
        And I logged out

