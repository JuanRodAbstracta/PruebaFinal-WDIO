import datos from '../datos/datos';
import BasePage from './base.page';

class CustomerServicePage extends BasePage {

    //Elementos Web
        
    get botonContactUs(){ return $('[title="Contact us"]'); }
    get subject() { return $('#id_contact');}
    get message() { return $('#message');}
    get submitMessage() { return $('#submitMessage');}
    get succesMessageAlert() { return $('#center_column > p')}
    
    

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Manda un texto a Contact Us
    */
    async enviarMensaje() {

        addStep('Manda un texto a Contact Us');
        await this.clickearElemento(await this.botonContactUs);
        await this.subject.selectByIndex(1);
        await this.clickearElemento(await this.message); 
        await this.vaciarCampoYEnviarTexto(await this.message, datos.lorem);
        await this.clickearElemento(await this.submitMessage);

    }

}

export default new CustomerServicePage();