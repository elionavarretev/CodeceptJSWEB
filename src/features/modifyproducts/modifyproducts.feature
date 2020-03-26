@modifyproducts
Feature: Modificar pedido desde el carrito
  In order to achieve my goals
  As a persona
  I quiero permitir eliminar un producto de la lista

Scenario Outline: Modificar pedido desde el carrito
  Given Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" "<cuv>" modifyproducts.feature
  Given Visualizo una cantidad existente de productos
  When Digito una cantidad de dos dígitos en el selector de cantidad Ej. <cantidad> "<cuv>"
  Then Se actualiza el precio final del producto "<cuv>"
  And Se actualiza la cantidad de productos en el resumen del pedido
  And Se actualiza el Monto Total del pedido
  And Se actualiza la Ganancia del pedido
  And I logout on system removeproducts.feature

Examples:
  | country | user | password | cuv | cantidad |
  | PE | 041702206 | 1 | 71289 | 15 |
  
