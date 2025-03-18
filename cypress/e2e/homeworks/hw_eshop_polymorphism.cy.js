import { ProductPage } from "../../page-objects/hw-polymorphism/product_page";

describe("HW Polymorphism Test Iphone Product", () => {
    it("Assertion of the iPhone product description", () => {
        new ProductPage().openEshop()
        .openProductIphoneDetail()
        .productIphoneHasDescription()
        .returnToMainPage();      
    }); 
});