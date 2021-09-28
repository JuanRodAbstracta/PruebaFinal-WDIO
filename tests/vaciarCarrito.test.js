import datos from '../datos/datos';
import AuthenticationPage from '../pages/authentication.page';
import ShoppingCartSummaryPage from '../pages/shoppingCartSummary.page';
import SearchPage from '../pages/search.page';

describe('Cambiar direccion de entrega: ',  () => {

    it('Chequear que no haya una sesion abierta', async () => {
        await AuthenticationPage.abrir('/');
        await AuthenticationPage.cierraSesion();        
        await browser.pause(3000);
    });

    it('Abrir usuario creado para este test', async () => {  
        await AuthenticationPage.loguearse();
        await AuthenticationPage.ingresarCuentaExistente(); 
        await browser.pause(3000);
    });

    it('Busca producto pre cargado en datos y lo agrega al carrito', async () => {
        await AuthenticationPage.buscar(datos.productoBusqueda);
        await SearchPage.agregarCarrito();
        await browser.pause(3000);
    });

    it('Comparación de imágenes: Verifica que el producto se agrego al carrito', async () => {         
        await (await SearchPage.iconoCheck).waitForDisplayed();
        expect(
            await browser.checkElement(await SearchPage.iconoCheck, "chequeoCarrito", {
                /* opciones de configuración para el elemento */
            }),
            "Error: el producto no se agregó correctamente al carrito"
        ).equal(0);
        await AuthenticationPage.clickearElemento(await AuthenticationPage.botonCerrar);        
    });

    it('Entra al carrito y elimina el producto', async () => { 
        await ShoppingCartSummaryPage.vaciarCarrito();
        expect(await ShoppingCartSummaryPage.alertaCarroVacio.getText()).to.equal('Your shopping cart is empty.','Error: el carrito no se vació correctamente.');
    });

    
    
});