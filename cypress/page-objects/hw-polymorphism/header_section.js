export class HeaderSectionEshop {
    constructor() {
        this.logo = "#logo > a > .img-responsive";
    } 
    
    returnToMainPage() {
        cy.get(this.logo).click();
        return this;
    }
}