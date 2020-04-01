const BaseModule = require('../../base/BaseModule');
const locator = require('./productsLocator');

class productsModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}
    
    async definedSteps() {
		this.I.amOnPage('/');		
	}

	seleccionarCategoria(strCategoria) {
        this.I.moveCursorTo(locator.findTitle(strCategoria));
	}
		
	seleccionarTipo(strTipo) {
        this.I.click(locator.findTitle(strTipo));
    }	
    
	seleccionarDetalleProducto(strDProducto) {
        this.I.click(locator.findTitlebyClass(strDProducto));
	}	
	
	agregarCantidad(strCantidad) {        
        this.I.appendField(locator.txtCantidad, '');
        this.I.pressKey(['Shift', 'Up arrow']);
        this.I.pressKey('Del');
        //this.I.pressKey('Backspace');

        this.I.clearField(locator.txtCantidad)
        //pause()

        this.I.fillField(locator.txtCantidad, strCantidad);
	}
	
	
	seleccionarAgregarBolsa() {		
        this.I.click({id: locator.btnAgregarBolsa});
	}
		
	seleccionarIrBolsa() {		
        this.I.click(locator.btnIrBolsa);
	}
	
		seleccionarIrPagarPopPup() {		
		this.I.click(locator.btnIrPagarPopup);
	}
	
		seleccionarIrPagar() {				
		this.I.click(locator.btnIrPagar);
	}
	
	ingresarComoInvitado(strInvitado) {	
		let arrInvitado = strInvitado.split(";");
		this.I.fillField({id: locator.txtNombre} ,arrInvitado[0].trim());
		this.I.fillField({id: locator.txtApellido} ,arrInvitado[1].trim());
		this.I.fillField({id: locator.txtEmail },arrInvitado[2].trim());
		this.I.fillField({id: locator.txtConfirmarEmail },arrInvitado[3].trim());
        
        this.I.click(locator.btnIniciarComoInvitado);
	}
		
	ingresarDireccionEnvio(strEnvio) {	
		
		let arrEnvio = strEnvio.split(";");
		//this.I.click(locator.selectDepa(arrEnvio[0]));
		this.I.click(locator.selectIdText(locator.cmbDepartamento, arrEnvio[0]));
		this.I.click(locator.selectIdText(locator.cmbProvincia ,arrEnvio[1]));
		this.I.click(locator.selectIdText(locator.cmbDistrito ,arrEnvio[2]));
		this.I.fillField({id: locator.txtDireccion} ,arrEnvio[3]);
		this.I.fillField({id: locator.txtPiso },arrEnvio[4]);
		this.I.fillField({id: locator.txtReferencia },arrEnvio[5]);
		this.I.fillField({id: locator.txtTelefono} ,arrEnvio[6]);
		
		this.I.click({id: locator.btnContinuar});
		/**/
	}
}

module.exports = new productsModule();
module.exports.productsModule = productsModule;