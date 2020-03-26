@login
Feature: Doing Login
  In order to achieve my goals
  As a persona
  I want to be able to log in system

 Background:
    Given I have test data

Scenario: Doing Login
  Given I select my "<country>" and put my "<user>" and my "<password>"
  When  I click on ingresar a tu cuenta
  Then  I login on system
  And   I logout on system