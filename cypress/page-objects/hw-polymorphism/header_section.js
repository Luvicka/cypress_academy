import { ProductPage } from "./product_page";

export class HeaderSectionEshop {
    constructor() {
        this.logo = "#logo > a > .img-responsive";
    } 
    
    returnToMainPage() {
        cy.get(this.logo).click();
        return new ProductPage();
    }
}