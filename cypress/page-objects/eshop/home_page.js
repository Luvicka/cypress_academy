export class HomePage {
    constructor() {
        this.eshopUrl = "https://tredgate.com/eshop/";
        this.myAccountButton = ".dropdown > .dropdown-toggle > .fa";
        this.registerButton = ".dropdown-menu > :nth-child(1) > a";
    } 
    
    openEshop() {
        cy.visit(this.eshopUrl);
    }

    openRegistration() {
        cy.get(this.myAccountButton).click();
        cy.get(this.registerButton).click();
    }
}