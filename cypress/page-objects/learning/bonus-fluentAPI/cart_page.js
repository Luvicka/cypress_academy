export class CartPage{
    constructor(){
        this.addToCart = ".cart";
    }

    addBronzerToCart(){
        cy.get(this.addToCart).click();
        // TODO add return after Page Object for Shopping cart is done
    }
}