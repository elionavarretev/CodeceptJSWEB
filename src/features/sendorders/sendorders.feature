@sendorders
Feature: Enviar pedido desde el carrito
  In order to achieve my goals
  As a persona
  I quiero enviar un pedido desde el carrito

Scenario Outline: Enviar pedido desde el carrito
  Given Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" "<cuv>" sendorders.feature
  Given Visualizo en el carrito una cantidad existente de productos
  When Hago click en el botón "Enviar pedido"
  Then Se despliega el modal informativo "Estás a punto de enviar tu pedido" con la información relacionada al pedido
  And El pedido es confirmado
  And El pedido se ha enviado
  And I logout on system sendorders.feature

Examples:
  | country | user | password | cuv |
  | PE | 041702206 | 1 | 71289 |
  
