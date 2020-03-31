#AUTOMATION: elionavarretev@gmail.com

@products
Feature: AUTOMATION

  @caso
  Scenario Outline: Flujo de compra
    Given que un invitado y entra a la web esika
    And ademas selecciona "<categoria>" y selecciona "<tipo>"
    When se dirige a la ficha del producto "<cualquiera>"
    And agrega "<cantidad>" adicional
    Then agrega a la bolsa
    And se registra como "<invitado>"
    And se registra la dirección de "<envio>" y anula la compra
    Examples:
      | categoria | tipo |cualquiera| cantidad | invitado | envio |
      | Perfumes | Maderosa | Perfume D'Antan |2 | Elio;Navarrete;elionavarretev@gmail.com;elionavarretev@gmail.com|ANCASH;AIJA;AIJA;Av Larco 23;AA;Plaza Vea;979094101|
