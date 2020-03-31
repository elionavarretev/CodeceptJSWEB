const BaseLocator = require('../../base/BaseLocator')
//'../../locators/CartLocator'
class ProductsLocator extends BaseLocator.BaseLocator {
	constructor(){
        super();

        this.selectCountry = locate('select').withAttr({id:'ddlPais'});
		this.findTitle = (strTitle) => 
                                        locate('a')
                                        .withAttr({ 
                                            title: strTitle
                                            });
        this.findTitlebyClass = (strTitle) => 
                                        locate('a')
                                        .withAttr({ 
                                            title: strTitle,
                                            class: 'thumb'
                                            });
        
		
        this.btnCompraOnline = "//*[@id='addToCartButton_200089222']";  
        this.btnIrAlProducto = "/html/body/main/div[4]/div/div[2]/div/div/div[2]/div[1]/div";
	
        this.btnSeguirComprando = "//*[@id='addToCartLayer']/a[2]";
        this.lnkFichaProducto = "product_productName_200079595";
        
        this.txtCantidad = "pdpAddtoCartInput";
        this.btnAgregarBolsa = "addToCartButton";
        this.btnIrBolsa = "/html/body/main/div[1]/header/nav[1]/div/div/div[2]/div/ul/li[2]/div/div[2]/div/a/div[2]";
        this.btnIrPagarPopup = "//*[@id='addToCartLayer']/a[1]";
        
        this.btnIrPagar = "//div[@class='col-sm-5 col-md-12 pull-right']//button[@class='btn btn-magenta btn-block btn--continue-checkout js-continue-checkout-button'][contains(text(),'Ir a pagar')]";
     
        this.lblopcional = "/html/body/main/section[1]/div/div/div[2]/div/div[3]/div[3]/div";
        this.txtNombre = "guest.firstName";
        this.txtApellido = "guest.lastName";
        this.txtEmail = "guest.email";
        this.txtConfirmarEmail = "guest.confirm.email";
        this.chkAceptoAutorizacion = "//*[@id='guestForm']/div[7]/div/input";
        this.btnIniciarComoInvitado = "//*[@id='guestForm']/div[8]/button";
        
//        this.selectDepa= (strDepartamento) => `//*[@id="address.regionIsoParent2"]/option[contains(text(),'${strDepartamento}')]`;
        this.selectIdText= (id,strDepartamento) => `//*[@id='${id}']/option[contains(text(),'${strDepartamento}')]`;

          

        this.cmbDepartamento = "address.regionIsoParent2";
        this.cmbProvincia = "address.regionIsoParent1";
        this.cmbDistrito = "address.regionIso";
        this.txtDireccion = "address.line1";
        this.txtPiso = "address.line2";
        this.txtReferencia = "address.referencia";
        this.txtTelefono = "address.phone";
        this.btnContinuar = "addressSubmit";
        this.btnIrATienda = "//*[@id=\"_2_eqL1nhjcAHh9GEklzlA6\"]/div[1]/div[3]";
        this.txtBuscar = "js-site-search-input";
        
        this.btnEliminar = "/html/body/main/section[1]/div/div/div[1]/div/ul/li[2]/table/tbody/tr/td/li[1]/div[8]/div/a/span";
        this.lblEtiquetaEliminar = "/html/body/main/div[2]/div/div/div";
        this.btnBuscar = "/html/body/main/div[1]/header/nav[2]/div/div[2]/div/div/div[2]/div/div/div/form/div/div/span/button";
	}
}

module.exports = new ProductsLocator();
module.exports.ProductsLocator = ProductsLocator;
