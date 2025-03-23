import { ConfirmationPage } from "./confirmation_page";

export class FormPage{
constructor(){
    this.firstNameInput="#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.telephoneInput = "#AccountFrm_telephone";
    this.faxInput = "#AccountFrm_fax";
    this.companyInput = "#AccountFrm_company";
    this.address1Input = "#AccountFrm_address_1";
    this.address2Input = "#AccountFrm_address_2";
    this.cityInput = "#AccountFrm_city";
    this.regionStateInput = "#AccountFrm_zone_id";
    this.zipCodeInput = "#AccountFrm_postcode";
    this.countryInput = "#AccountFrm_country_id";
    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.passwordConfirmInput = "#AccountFrm_confirm";
    this.subscribeButton = "#AccountFrm_newsletter0";
    this.privacyPolicyButton = "#AccountFrm_agree";
    this.continueButton = ".col-md-2 > .btn";
    }

    fillingPersonalDetails(firstName, lastName, email, telephone, fax){
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.emailInput).type(email);
        cy.get(this.telephoneInput).type(telephone);
        cy.get(this.faxInput).type(fax); 
        return this;
    }

    fillingAdressDetails(companyName, address1, address2, city, zipCode){
        cy.get(this.companyInput).type(companyName);
        cy.get(this.address1Input).type(address1);
        cy.get(this.address2Input).type(address2);
        cy.get(this.cityInput).type(city);
        cy.get(this.countryInput).select("Czech Republic");
        cy.wait(1000);
        cy.get(this.regionStateInput).select("Vysocina");
        cy.get(this.zipCodeInput).type(zipCode);
        return this;   
    }

    fillingLoginDetails(loginName, password, passwordConfirmation){
        cy.get(this.loginNameInput).type(loginName);
        cy.get(this.passwordInput).type(password);
        cy.get(this.passwordConfirmInput).type(passwordConfirmation);
        return this;
    }

    choosingNewsletter(){
        cy.get(this.subscribeButton).check();
        return this;
    }

    agreeWithPrivacyPolicy(){
        cy.get(this.privacyPolicyButton).check();
        return this;
    }

    submitRegistrationPage(){
        cy.get(this.continueButton).click();
        return new ConfirmationPage();
    }
}