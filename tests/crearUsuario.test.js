import CreateAccountPage from '../pages/createAccount.page';
import AuthenticationPage from '../pages/authentication.page';
import datos from '../datos/datos';
import MyAccountPage from '../pages/myAccount.page';

describe('Registro: ',  () => {
    
    it('Comienza un nuevo registro', async () => {
        await CreateAccountPage.abrir('/');
        await CreateAccountPage.loguearse();
        await AuthenticationPage.nuevoRegistro();
        await browser.pause(3000);        
    });

    it('Llena datos', async () => {
        await CreateAccountPage.cargarDatos(datos.nombre, datos.apellido, datos.contrasenia, datos.diaNacimiento, datos.mesNacimiento, datos.nombreDireccion, datos.apellidoDireccion, datos.compania, datos.direccion, datos.ciudad, datos.codigoPostal, datos.celular, datos.addressAlias)
        await browser.pause(3000);       
    });

    it('Verifica que la cuenta se haya creado', async () => { // Chequea que la cuenta se haya creado leyendo texto que sale en myAccount.   
        expect(await MyAccountPage.mensajeBienvenida.getText()).to.equal('Welcome to your account. Here you can manage all of your personal information and orders.');
        await browser.pause(3000);
    });
    
    

});