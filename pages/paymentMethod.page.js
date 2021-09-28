import BasePage from './base.page';

class PaymanetMethodPage extends BasePage {

    //Elementos Web
        
    get pagoCheque() {return $('.cheque'); }
    get pagoTarjeta() {return $('[title="Pay by check."]'); }
    get confirmarOrden() {return $('p>button[type="submit"]'); }


   //-------------------------------------------------------------------------------------------------------//
 
    

    async seleccionarMetodoPago(){
        addStep('Selecciono metodo de pago');
        await this.clickearElemento(await this.pagoCheque);
        await browser.pause(4000);
        await this.clickearElemento(await this.confirmarOrden);
        await browser.pause(4000);    
    }

}

export default new PaymanetMethodPage();

