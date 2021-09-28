const PAGE_TIMEOUT = 10000

export default class BasePage {

    //WebElements
   get signIn(){ return $('.login'); }

   get signOut(){ return $('.logout'); }

   get barraBusqueda(){ return $('#search_query_top'); }

   get mensajeAgregadoCarrito(){ return $('.icon-ok'); }

   get botonCerrar(){ return $('.cross'); }

   get alertaSuccesConsulta () { return $('p*=Your message has been successfully')}

  


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Abrir página
    * @param {String} ruta a la cual acceder
    */
   async abrir(ruta) {
       await browser.url(`${ruta}`);
   }


   /**
    * Esperar a que un elemento sea clickeable y hacer click
    * @param {Object} elemento a clickear
    */
   async clickearElemento(elemento) {
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.click();
   }


   /**
    * Método para enviar texto a un elemento
    * @param {Object} elemento que recibirá el texto
    * @param {String} texto a envíar 
    */
   async vaciarCampoYEnviarTexto(elemento, texto){
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.clearValue();
       await elemento.click();
       await elemento.keys(texto);
   }


   /**
    * Método tocar boton SignIn
    */
   async loguearse(){ 

        addStep('Inicia logueo');
        await this.signIn.click();
        
   }   
   
   async cierraSesion(){

        addStep('Cierra sesion abierta')
        let isDisplayed = await this.signOut.isDisplayed();
            if(isDisplayed){
                await signOut.click();
            }

   }

    /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
     async buscar(articulo) {
        addStep('Buscar articulo')
        await this.vaciarCampoYEnviarTexto(await this.barraBusqueda, articulo);
        (await this.barraBusqueda).keys('Enter');
    }

    async randomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    


}