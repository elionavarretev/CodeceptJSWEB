@addproducts/fromcarousel
Feature: Agregar item a carrito desde carrusel de catálogo
  In order to achieve my goals
  As a persona
  I want to be able to log in system

Scenario Outline: add products from carousel
  Given I logged in with params "<country>", "<user>" and "<password>"
  When  I click on agregar button del carousel de catalogo
  Then  I see add product confirmation
  And   I logout on system catalogo.feature

Examples:
  | country | user | password |
  | PE | 041702206 | 1 |
  
