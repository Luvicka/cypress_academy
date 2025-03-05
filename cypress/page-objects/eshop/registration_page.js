export class RegistrationPage {
    constructor() {
      this.firsNameInput = "#input-firstname";
      this.lastNameInput = "#input-lastname"; 
      this.emailInput = "#input-email";
      this.telephoneInput = "#input-telephone";
      this.passwordInput = "#input-password";
      this.passwordConfirmInput = "#input-confirm";
      this.privacyPolicyButton = "[type='checkbox']";
      this.continueButton = ".pull-right > .btn";
    }

    fillingRegistrationFormWithAllColumns(firstname, lastName, email, telephone, password, passwordConfirmation) {
        cy.get(this.firsNameInput).type(firstname);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.emailInput).type(email);
        cy.get(this.telephoneInput).type(telephone);
        cy.get(this.passwordInput).type(password);
        cy.get(this.passwordConfirmInput).type(passwordConfirmation);
        cy.get(this.privacyPolicyButton).click();
        cy.get(this.continueButton).click();
    }
}