import { AccountLoginPage } from "../../page-objects/hw-automationteststore/account_login_page";
import { ConfirmationPage } from "../../page-objects/hw-automationteststore/confirmation_page";
import { FormPage } from "../../page-objects/hw-automationteststore/form_page";
import { faker } from '@faker-js/faker';

function generateLoginName(minLength = 6) {
  let username = faker.internet.userName();
  if (username.length < minLength) {
    const extra = faker.string.alphanumeric(minLength - username.length);
    username += extra;
  }
  return username;
}

describe("HW Test AutomationStore Forms", () => {
         
     it("Completes registration form and verifies confirmation message", () => {
        const eshop = new AccountLoginPage();
        const registrationForm = new FormPage();
        const confirmationPage = new ConfirmationPage();
        const email = faker.internet.email();
        const loginName = generateLoginName();

        eshop.openEshop();
        eshop.clickLoginOrRegister();
        eshop.clickContinueButton();

        registrationForm.fillingPersonalDetails("Lucie", "Vildomcova", email, "55", "44");
        registrationForm.fillingAdressDetails("Mountain Guide", "Les 1", "Les 2", "Opava", "66699")
        registrationForm.fillingLoginDetails(loginName, "password", "password");
        registrationForm.choosingNewsletter().agreeWithPrivacyPolicy().submitRegistrationPage();

        confirmationPage.assertConfirmationMessage();
    });  
});