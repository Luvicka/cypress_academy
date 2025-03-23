import { AccountLoginPage } from "./account_login_page";

export class BasePage {
    constructor() {
        this.url = Cypress.env("automation_test_store_url");
        this.loginOrRegisterButten = "#customernav";
    } 
    
    openEshop() {
        cy.visit(this.url);
    }

    clickLoginOrRegister() {
        cy.get(this.loginOrRegisterButten).click();
        return new AccountLoginPage();
    }
}