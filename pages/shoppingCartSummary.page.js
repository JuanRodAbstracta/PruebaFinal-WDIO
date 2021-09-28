import BasePage from './base.page';

class ShoppingCartSummaryPage extends BasePage {

    //Elementos Web
        
    get procederCheckout() {return $('p > [title="Proceed to checkout"]');}
    get carrito() {return $('[title="View my shopping cart"]');}
    get eliminarProducto() {return $('[title="Delete"]');}
    get alertaCarroVacio() {return $('.alert');}
    
    

   //-------------------------------------------------------------------------------------------------------//
     

    async vaciarCarrito(){

        addStep('Vacío carrito');
        await this.clickearElemento(await this.carrito);
        await browser.pause(1100);
        await this.clickearElemento(await this.eliminarProducto);
        await browser.pause(1100);       
 
    }

    async procederCheck(){
        
        await this.clickearElemento(await this.procederCheckout);
    }

}

export default new ShoppingCartSummaryPage();