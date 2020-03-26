@addproducts/search
Feature: Buscar una oferta por cuv que tenga más de un medio de venta
  In order to achieve my goals
  As a persona
  I quiero permitir buscar un producto por cuv

Scenario Outline: Buscar una oferta por CUV desde el buscador
  Given Me encuentro en el buscador del home "<country>", "<user>" and "<password>" bycuv.feature
  Given Digito un producto por CUV "<cuv>"
  When Aumento la <cantidad> Hago click en el boton Agregar
  Then Se muestra el modal snack bar "Producto añadido correctamente"
  And El producto está agregado en el carrito
  And Se visualiza la cantidad que se adicionó
  And I logout on system bycuv.feature 

Examples:
  | country | user | password | cuv | cantidad |
  | PE | 041702206 | 1 | 71289 | 5 |
  
