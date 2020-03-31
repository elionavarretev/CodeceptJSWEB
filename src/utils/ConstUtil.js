class ConstUtil {
	constructor(){
		
		this.WAIT_A_MOMMENT = 'espere un momento';
		this.WAITING_TIME = 8;

		this.WEB_CORRECTO = 'Se entró a la web correctamente.';
		this.CliC_DETALLE_PRODUCTO = 'Se selecciona el detalle del producto.';
		this.SE_INGRESA_INVITADO = 'Se ingresa como invitado.';
		this.SE_AGREGA_BOLSA = "Se agrega a la bolsa.";
		this.IR_AL_POPUP = 'Se va al popup.';
		this.IR_A_PAGAR = 'Ir a pagar';
		this.SE_INGRESA_DIRECCION_ENVIO = 'Se ingresa dirección de envio.';
	}
}

module.exports = new ConstUtil();
module.exports.ConstUtil = ConstUtil;