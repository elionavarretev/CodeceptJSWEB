@addproducts/search
Feature: Filtrar categorías en el landing de productos
  In order to achieve my goals
  As a persona
  I want to be able to Filtrar categorías en el landing de productos

Scenario Outline: Filtrar categorías en el landing de productos
  Given I logged in with params "<country>", "<user>" and "<password>"
  And Me encuentro en la sección del menú lateral Categorías
  When Hago click en la sección Categorías
  And Hago click en la sección Fragancias
  Then Se visualizan los filtros de Fragancias
  And Y los productos están filtrados en el landing
  And I logout on system bycategoria.feature 

Examples:
  | country | user | password |
  | PE | 041702206 | 1 |
  
