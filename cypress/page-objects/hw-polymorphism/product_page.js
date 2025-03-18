import { HeaderSectionEshop } from "./header_section";

export class ProductPage extends HeaderSectionEshop{
    constructor() {
        super();
        this.eshopUrl = "https://tredgate.com/eshop/";
        this.productIphone = ":nth-child(1) > .product-thumb > .image > a > .img-responsive";
        this.productDescription =".intro";
    }

    openEshop() {
        cy.visit(this.eshopUrl);
        return this;
    }

    openProductIphoneDetail() {
        cy.get(this.productIphone).click();
        return this;
    }

    productIphoneHasDescription() {
        cy.get(this.productDescription).should("contain.text","iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.");
        return this;
    }







   // openProductIphone() {
      //  cy.get(this.productIphone).click();

     //   cy.xpath("//img[title='iPhone']").click();
    //}

   }

