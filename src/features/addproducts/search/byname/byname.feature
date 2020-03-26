@addproducts/search
Feature: Buscar una oferta por nombre que tenga más de un medio de venta
  In order to achieve my goals
  As a persona
  I quiero permitir buscar un producto por nombre

Scenario Outline: Buscar una oferta por nombre que tenga más de un medio de venta
  Given Me encuentro en el buscador del home "<country>", "<user>" and "<password>" byname.feature
  Given Digito un producto que se encuentra en ambos medios Ej. "<producto>"
  When Termino de digitar la palabra buscada
  Then Se visualizan los productos coincidentes de ambos medios
  And Se muestran las etiquetas respectivas <posicion>
  And Se prioriza producto de catálogo con el tag "Aplica descuento" con el botón "Ver detalle" <posicion>
  And Se visualiza producto de revista con el selector de cantidad y botón "Agregar"
  And I logout on system byname.feature

Examples:
  | country | user | password | producto | posicion |
  | PE | 041702206 | 1 | perfume | 3 |