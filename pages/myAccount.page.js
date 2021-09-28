import BasePage from './base.page';

class MyAccountPage extends BasePage {

    //Elementos Web
         
    get mensajeBienvenida(){ return $('.info-account'); }
    get orderHistDetails(){ return $('.icon-list-ol'); } 
    get creditSlips(){ return $('.Credit slips'); } 
    get myAdresses () { return $('.icon-building'); }   
    get personalInformation () { return $('.Information'); }  
    get myWishlist () { return $('.myaccount-link-list'); }
    


   //-------------------------------------------------------------------------------------------------------//
    
   async ingresarMisDirecciones() {
        addStep('Ingresa a My Adress');
        await this.clickearElemento(await this.myAdresses);
   }
   

}
export default new MyAccountPage();