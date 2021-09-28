import BasePage from './base.page';

class SearchPage extends BasePage {

    //Elementos Web
         
    get resultadoBusqueda(){ return $('h5[itemprop]'); }
    get nombreProducto() {return $('.product-name');}
    get procederCheckout() {return $('[title="Proceed to checkout"]'); }
    get iconoCheck() {return $('.icon-ok'); }
    get iconoCruz() {return $('.cross'); }
    get carrito() {return $('[title="View my shopping cart"]'); }
    get botonAgregarCarrito() { return $('#add_to_cart > button')}
    get producto() { return $('a[title= "Faded Short Sleeve T-shirts"]:last-of-type')}



   //-------------------------------------------------------------------------------------------------------//
 
   async agregarCarrito(){
       addStep('Agrega producto a carrito');  
       await this.clickearElemento(await this.producto);       
       await this.clickearElemento(await this.botonAgregarCarrito); 
    }

    async procederCheckout(){
        await this.clickearElemento(await this.procederCheckout);
    }

    async cerrarVentana(){
        await this.clickearElemento(await this.iconoCruz);
    }

    async accederCarrito(){
        await this.clickearElemento(await this.carrito);
    }



}

export default new SearchPage();