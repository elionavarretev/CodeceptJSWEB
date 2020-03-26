@addproducts/fromcarousel
Feature: Agregar item a carrito desde carrusel de revista
  In order to achieve my goals
  As a persona
  I want to be able to log in system

Scenario Outline: add products from carousel
  Given I logged in with params "<country>", "<user>" and "<password>"
  When  I click on agregar button del carousel de revista
  Then  I see add product confirmation
  And   I logout on system revista.feature

Examples:
  | country | user | password |
  | PE | 041702206 | 1 |
  
