import BasePage from './base.page';


class CreateAccountPage extends BasePage {

   //Elementos Web

   //PERSONAL INFORMATION 

   get genderM(){ return $('#id_gender1'); } 
   get genderF(){ return $('#id_gender2'); } 
   get firstName () { return $('#customer_firstname'); }   
   get lastName () { return $('#customer_lastname'); }  
   get email () { return $('#email'); }
   get password () { return $('#passwd'); }
   get birthDay () { return $('#uniform-days'); }
   get birthMonth () { return $('#uniform-months'); }
   get birthYear () { return $('#uniform-years'); }
   get newsletter () { return $('#newsletter'); } 
   get specialOffers () { return $('#uniform-option'); } 

   //YOUR ADDRESS
   
   get firstNameAddress () { return $('#firstname'); }   
   get lastNameAddress () { return $('#lastname'); }
   get company () { return $('#company'); }
   get address () { return $('#address1'); }
   get city () { return $('#city'); }
   get state () { return $('#uniform-id_state'); }
   get postcode () { return $('#postcode'); }
   get country () { return $('#uniform-id_conutry'); }
   get mobilePhone () { return $('#phone_mobile'); }
   get alias () { return $('#alias'); }

   get btnRegister () { return $('#submitAccount'); }  
   
   
   //-------------------------------------------------------------------------------------------------------//

   async cargarDatos(nombre, apellido, contrasenia, diaNacimiento, mesNacimiento, nombreDireccion, apellidoDireccion, compania, direccion, ciudad, codigoPostal, celular, addressAlias) {

      addStep('Carga datos de usuario');
      await this.genderM.click();
      await this.vaciarCampoYEnviarTexto(await this.firstName, nombre);
      await this.vaciarCampoYEnviarTexto(await this.lastName, apellido);
      //await this.vaciarCampoYEnviarTexto(await this.email, email);
      await this.vaciarCampoYEnviarTexto(await this.password, contrasenia);
      await this.birthDay.selectByIndex(diaNacimiento);
      await this.birthMonth.selectByIndex(mesNacimiento);
      await this.birthYear.selectByIndex(28);
      await this.newsletter.click();

      await this.vaciarCampoYEnviarTexto(await this.firstNameAddress, nombreDireccion);
      await this.vaciarCampoYEnviarTexto(await this.lastNameAddress, apellidoDireccion);
      await this.vaciarCampoYEnviarTexto(await this.company, compania);
      await this.vaciarCampoYEnviarTexto(await this.address, direccion);
      await this.vaciarCampoYEnviarTexto(await this.city, ciudad);
      await this.state.selectByIndex(3);
      await this.vaciarCampoYEnviarTexto(await this.postcode, codigoPostal);
      await this.vaciarCampoYEnviarTexto(await this.mobilePhone, celular);
      await this.vaciarCampoYEnviarTexto(await this.alias, addressAlias);

      await this.btnRegister.click();
   }  
   
   
}

export default new CreateAccountPage();