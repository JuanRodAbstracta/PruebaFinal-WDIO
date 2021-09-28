import AuthenticationPage from '../pages/authentication.page';
import CustomerServicePage from '../pages/customerService.page';

describe('Cambiar direccion de entrega: ',  () => {

    it('Chequear que no haya una sesion abierta', async () => {
        await AuthenticationPage.abrir('/');
        await AuthenticationPage.cierraSesion();        
        await browser.pause(3000);
    });

    it('Abrir usuario creado para este test', async () => {  // Ingresa a cuenta creada para este test
        await AuthenticationPage.nuevoRegistro();
        await AuthenticationPage.ingresarCuentaExistente(); 
        await browser.pause(3000);
    });

    it('Ingresa al link "Contact Us" del footer y envía mensaje', async () => {  // Envia mensaje pre cargado a la direccion de contacto.        
        await CustomerServicePage.enviarMensaje();
        await browser.pause(3000);       
    });

    it('Chequea que el mensaje fue enviado correctamente', async () => {  
        expect(await CustomerServicePage.succesMessageAlert.getText()).to.equal('Your message has been successfully sent to our team.','Error: no se envió mail correctamente');
    });

    
});