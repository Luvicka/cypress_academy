import { HomePage } from "../../page-objects/eshop/home_page";
import { RegistrationPage } from "../../page-objects/eshop/registration_page";

describe('Eshop registration test', () => {
  it.skip('Eshop registration test', () => {
    const eshop = new HomePage();
    const registrationForm = new RegistrationPage
    eshop.openEshop();
    eshop.openRegistration();
    registrationForm.fillingRegistrationFormWithAllColumns("Lucie","Vildomcova","1234@1234.cz","123","AA1234","AA1234");
  });  
});