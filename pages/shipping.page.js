import BasePage from './base.page';

class ShippingPage extends BasePage {

    //Elementos Web
        
    get procederCheckout() {return $('[name="processCarrier"]'); }
    get terminosServicioCheck() {return $('#uniform-cgv'); }


   //-------------------------------------------------------------------------------------------------------//
 
   async procederCheck(){
    await this.clickearElemento(await this.terminosServicioCheck);   
    await this.clickearElemento(await this.procederCheckout);
}

}

export default new ShippingPage();