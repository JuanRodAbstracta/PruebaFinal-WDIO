import BasePage from './base.page';

class OrderConfirmationPage extends BasePage {

    //Elementos Web
        
    
   
    get mensajeConfirmacion () {return $('p=Your order on My Store is complete.')}


   //-------------------------------------------------------------------------------------------------------//
 
   

}

export default new OrderConfirmationPage();