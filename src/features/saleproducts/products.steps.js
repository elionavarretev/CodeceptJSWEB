const ConstUtil = require('../../utils/ConstUtil');
const mModule = require('./productsModule');

  Given(/^que un invitado y entra a la web esika$/, function() {
      mModule.definedSteps();
      mModule.saveScreenshotWithMocha(__filename,ConstUtil.WEB_CORRECTO);
  });

  When(/^ademas selecciona "(.*)" y selecciona "(.*)"$/, (categoria, tipo) => {
    mModule.seleccionarCategoria(categoria)     
    mModule.seleccionarTipo(tipo)
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.CliC_CATEGORIA_TIPO);
  });

  When(/^se dirige a la ficha del producto "(.*)"$/, function(cualquiera) {
    mModule.seleccionarDetalleProducto(cualquiera)
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.CliC_DETALLE_PRODUCTO);
  });

  When(/^agrega "(.*)" adicional$/, function(cantidad) {
    mModule.agregarCantidad(cantidad)
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_AGREGA_CANTIDAD);
  });

  Then(/^agrega a la bolsa$/, function() {
    mModule.seleccionarAgregarBolsa();
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_AGREGA_BOLSA);
  });

  When(/^se registra como "(.*)"$/, function(invitado) {
    mModule.seleccionarIrPagarPopPup();
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.IR_AL_POPUP);
    mModule.seleccionarIrPagar();
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.IR_A_PAGAR);
    mModule.ingresarComoInvitado(invitado);
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_INGRESA_INVITADO);
  });

  When(/^se registra la dirección de "(.*)" y anula la compra$/, function(envio) {
    mModule.ingresarDireccionEnvio(envio);
    mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_INGRESA_DIRECCION_ENVIO);
  });

