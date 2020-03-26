@removeproducts
Feature: Eliminar pedido desde el carrito
  In order to achieve my goals
  As a persona
  I quiero permitir eliminar un producto de la lista

Scenario Outline: Eliminar pedido desde el carrito
  Given Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" "<cuv>" removeproducts.feature
  Given Visualizo una cantidad existente de productos
  When Elijo eliminar un producto "<cuv>" pulsando el tachito
  Then Se despliega el modal de "¿Estás seguro de eliminar este producto?" con dos opciones "Sí, eliminar" y "Cancelar"
  When Cuando hago click en el botón "Sí, eliminar"
  Then Se elimina de la lista el producto elegido "<cuv>"
  And La cantidad de productos en el carrito es actualizada
  And I logout on system removeproducts.feature

Examples:
  | country | user | password | cuv |
  | PE | 041702206 | 1 | 71289 |
  
