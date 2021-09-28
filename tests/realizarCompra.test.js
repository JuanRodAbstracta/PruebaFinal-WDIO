import AuthenticationPage from '../pages/authentication.page';
import datos from '../datos/datos';
import SearchPage from '../pages/search.page';
import ShoppingCartSummaryPage from '../pages/shoppingCartSummary.page';
import YourAdressesPage from '../pages/yourAdresses.page';
import ShippingPage from '../pages/shipping.page';
import PaymentMethodPage from '../pages/paymentMethod.page';
import OrderConfirmationPage from '../pages/orderConfirmation.page';



describe('Agregar a carrito: ',  () => {

    it('Chequear que no haya una sesion abierta', async () => {
        await AuthenticationPage.abrir('/');
        await AuthenticationPage.cierraSesion();        
        await browser.pause(3000);
    });

    it('Abre usuario creado para este test', async () => {
        await AuthenticationPage.loguearse();
        await AuthenticationPage.ingresarCuentaExistente();        
        await browser.pause(3000);
    });

    it('Busca producto pre cargado en datos y lo agrega al carrito', async () => {
        await AuthenticationPage.buscar(datos.productoBusqueda);
        await SearchPage.agregarCarrito();
        await browser.pause(3000);
    });

    it('Comparación de imágenes: Verifica que el producto se agrego al carrito', async () => { //Compara imagenes para verificar que el producto se agrego al carrito
        
        await (await SearchPage.iconoCheck).waitForDisplayed();
        expect(
            await browser.checkElement(await SearchPage.iconoCheck, "chequeoCarrito", {
                /* opciones de configuración para el elemento */
            }),
            "Error: el producto no se agregó correctamente al carrito"
        ).equal(0);

        
    });

    it('Proceder con compra', async () => { //Apreta el boton Proceed to Checkout en las diferentes paginas del proceso de compra y acepta los terminos y condiciones.        
        
        await SearchPage.cerrarVentana();
        await SearchPage.accederCarrito();
        await ShoppingCartSummaryPage.procederCheck();
        await YourAdressesPage.procederCheck();
        await ShippingPage.procederCheck();
    });

    it('Selecciono Metodo de Pago', async () => { //Selecciona metodo de pago entre tarjeta o cheque y confirmar compra
        await PaymentMethodPage.seleccionarMetodoPago();  
    });

    it('Comparación de imágenes: verifica la compra final', async () => { //Compara imagenes para verificar que se realizó la compra
        
        await (await OrderConfirmationPage.mensajeConfirmacion).waitForDisplayed();
        expect(
            await browser.checkElement(await OrderConfirmationPage.mensajeConfirmacion, "chequeoCompra", {
                /* opciones de configuración para el elemento */
            }),
            "Error: La compra del producto no se realizó con éxito"
        ).equal(0);

               
    });

    


    
});