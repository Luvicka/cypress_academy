import { CartPage } from "./cart_page";

export class HomePage{
    constructor(){
        this.automationteststoreURL = "https://automationteststore.com/";
        this.bronzerStickDetail = "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname";
    }

    openHomePage(){
        cy.visit(this.automationteststoreURL);
        return this
    }

    clickBronzerDetail(){
        cy.get(this.bronzerStickDetail).click();
        return new CartPage();
    }
}