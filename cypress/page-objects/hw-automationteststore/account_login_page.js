import { BasePage } from "./base_page";
import { FormPage } from "./form_page";

export class AccountLoginPage extends BasePage {
    constructor(){
        super();
        this.continueButton = "#accountFrm > fieldset > .btn";
    }

    clickContinueButton(){
        cy.get(this.continueButton).click();
        return new FormPage();
    }
}